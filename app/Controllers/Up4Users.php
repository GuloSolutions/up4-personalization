<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Controllers\Location;
use Controllers\Weather;
use Controllers\WordpressUsers;
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
     * @var wpUser
     */

    public $wpUser;

    /*
     * @var Up4Session
     */
    public $up4Session;

    /*
     * @var string
     */
    private $facebook_id;

    /*
     * @var string
     */
    private $fb_user;

    /*
     * @var Array
     */
    private $up4Data;

    public function __construct() {

        $this->wpUser = new WordpressUsers;
    }

    public function checkUser()
    {
        $this->up4Session = Up4Session::where('sid', session_id())
            ->first();

        $this->up4User = Up4User::where('session_id', $this->up4Session->id)
            ->first();

            error_log(var_dump($this->user));

        if ($this->up4User === null) {
            $this->up4User = Up4User::where('facebook_id', $this->facebook_id)
                ->first();
        }

        if ($this->up4User !== null) {
            $this->user = $this->up4User->user;
        }

        $this->linkToUser();
    }

    public function setupSurveyResponse($response)
    {
        $this->up4Data = $response;
        $this->up4Data['gender'] = $response['gender'] == 'yes' ? 'female' : 'male';
        $this->up4Data['travels_often'] = $response['travels_often'] == 'yes' ? true : false;
        $this->up4Data['exercises_often'] = $response['exercises_often'] == 'yes' ? true : false;
        $this->up4Data['has_children'] = $response['has_children'] == 'yes' ? true : false;
    }

    public function setupFacebookResponse($response)
    {
        $this->facebook_id = $response['id'];
        $this->nice_name = preg_replace('/\s/', '-', $response['name']);
        $this->email = isset($response['email']) ? $response['email'] : Facebook_Social_Public::emailGenerator();
        $this->first_name = isset($response['first_name']) ? $response['first_name'] : $names[0];
        $this->last_name = isset($response['last_name']) ? $response['last_name'] :
             (!empty($names[2]) ? $names[2] : (!empty($names[1]) ? $names[1] : ''));

        // setup our up4 detail data
        $this->up4Data['facebook_id'] = $this->facebook_id;

        // $this->up4Data['nice_name'] = $this->nice_name;
        $names = explode('-', $this->nice_name);

        $this->up4Data['first_name'] = $this->first_name;
        $this->up4Data['last_name'] = $this->last_name;

        $this->up4Data['picture'] = $response['picture']['data']['url'];

        $this->up4Data['age'] = $this->getAge($response['birthday']);

        $this->up4Data['gender'] = $response['gender'];
    }

    private function linkToUser()
    {
        if ($this->user !== null) {

            wp_set_auth_cookie($this->user->ID);

            $this->update();

        } else {

            $this->wpUser->setupWPUser($this->user);
            $this->create();
        }
    }

    private function update()
    {
        if ($this->up4User !== null) {

            $this->up4User->session_id = $this->up4Session->id;

            foreach ($this->up4Data as $key => $value) {
                if (!empty($value)) {
                    $this->up4User->{$key} = $value;
                }
            }

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

    /*
     * @param null
     * @return bool
     */
    private function isFBUserLoggedIn ()
    {

        $this->fb_user = Up4User::where('session_id', $this->up4Session->id)
            ->where('facebook_id', $this->facebook_id)->first();

            if (!$this->fb_user->id) {
                return true;
            }
        return false;
    }
}
