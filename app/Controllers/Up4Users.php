<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Controllers\Location;
use Controllers\Weather;
use Models\User;
use Models\Up4User;
use Models\Up4Session;
use Carbon\Carbon;

class Up4Users
{
    /*
     * @var User
     */
    public $user;

    /*
     * @var Up4User
     */
    public $up4User;

    /*
     * @var Up4Session
     */
    public $up4Session;

    /*
     * @var string
     */
    private $facebook_id;

    public function __construct() {}

    public function checkUser()
    {
        $this->up4Session = Up4Session::where('sid', session_id())
            ->first();

        $this->up4User = Up4User::where('session_id', $this->up4Session->id)
            ->first();

        if ($this->up4User === null) {
            $this->up4User = Up4User::where('facebook_id', $this->facebook_id)
                ->first();
        }

        if ($this->up4User !== null) {
            $this->user = $this->up4User->user;
        }

        $this->linkToUser();
    }

    public function setupResponse($response)
    {
        $this->facebook_id = $response['id'];

        $this->nice_name = preg_replace('/\s/', '-', $response['name']);
        $names = explode('-', $this->nice_name);

        $this->first_name = isset($response['first_name']) ? $response['first_name'] : $names[0];
        $this->last_name = isset($response['last_name']) ? $response['last_name'] :
             (!empty($names[2]) ? $names[2] : (!empty($names[1]) ? $names[1] : ''));

        $this->picture = $response['picture']['data']['url'];

        $this->age = $this->getAge($response['birthday']);

        $this->gender = $response['gender'];

        $this->email = isset($response['email']) ? $response['email'] : Facebook_Social_Public::emailGenerator();
    }

    private function linkToUser()
    {
        if ($this->user !== null) {

            wp_set_auth_cookie($this->user->ID);

            $this->update();

        } else {

            $this->setupWPUser();
        }
    }

    private function update()
    {
        if ($this->up4User !== null) {

            $this->up4User->session_id = $this->up4Session->id;

            $this->up4User->first_name = $this->first_name;
            $this->up4User->last_name = $this->last_name;

            $this->up4User->picture = $this->picture;
            $this->up4User->age = $this->age;
            $this->up4User->gender = $this->gender;

            $location = new Location();
            $weather = new Weather($location);

            $this->up4User->location = $weather->getOrigin();
            $this->up4User->temperature = $weather->getTemperature();
            $this->up4User->conditions = $weather->getConditions();

            $this->up4User->save();
        } else {
            $this->create();
        }
    }

    private function create()
    {
        $this->up4User = new Up4User();

        $this->up4User->facebook_id = $this->facebook_id;

        $this->up4User->user_id = $this->user->ID;

        $this->update();
    }

    private function setupWPUser()
    {
        // see if we already have a user
        $this->user = User::where('user_email', $this->email)
            ->first();

        // add the WordPress users
        if ($this->user === null) {
            $this->newWPUser();
        }

        $this->create();
    }

    private function newWPUser()
    {
        $plain_text = wp_generate_password(20);
        $user_pass = wp_hash_password($plain_text);

        $user_data = [
                'user_login' => $this->email,
                'user_pass' => $user_pass,
                'user_email' => $this->email,
                'display_name' => sprintf('%s %s', $this->first_name, $this->last_name),
                'user_nicename' => $this->nice_name,
                'user_url' => '',
                'user_registered' => Carbon::now(),
                'user_activation_key' => '',
                'user_status' => 0
        ];

        $this->user = new User($user_data);
        $this->user->save();
    }

    /*
     * @param string date
     * @return int age
     */
    private function getAge($birthday)
    {
        if (!$birthday) return null;

        $birthday = new Carbon($birthday);

        return $birthday->diffInYears();
    }
}
