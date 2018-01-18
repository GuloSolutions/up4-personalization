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
     * @var array
     */
    private $data;

    public function __construct(\Models\Up4User $up4User, \Models\Up4Session $up4Session)
    {
        $this->up4User = $up4User;

        $this->up4Session = $up4Session;
    }

    public function checkUser()
    {
        if (empty($this->up4User->facebook_id) && empty($this->up4User->session_id)) {
            $this->up4User = Up4User::where('facebook_id', $this->facebook_id)
                ->first();
        }

        if ($this->up4User !== null) {
            $this->user = $this->up4User->user;
        } else {
            $this->up4User = new Up4User();
        }

        $this->linkToUser();
    }

    public function setupSurveyResponse($response)
    {
        $this->data['gender'] = $response['gender'] == 'yes' ? 'female' : 'male';

        $this->data['travels_often'] = filter_var($response['travels_often'], FILTER_VALIDATE_BOOLEAN);

        $this->data['exercises_often'] = filter_var($response['exercises_often'], FILTER_VALIDATE_BOOLEAN);

        $this->data['has_children'] = filter_var($response['has_children'], FILTER_VALIDATE_BOOLEAN);

        $this->data['age'] = $response['age'];
    }

    public function setupFacebookResponse($response)
    {
        $this->facebook_id = $response['id'];

        $this->email = $response['email'];

        $this->name = $response['name'];

        $names = explode(' ', $this->name);

        // setup our up4 detail data
        $this->data['facebook_id'] = $this->facebook_id;

        $this->data['first_name'] = isset($response['first_name']) ? $response['first_name'] : $names[0];

        $this->data['last_name'] = isset($response['last_name']) ? $response['last_name'] :
             (!empty($names[2]) ? $names[2] : (!empty($names[1]) ? $names[1] : ''));

        $this->data['picture'] = $response['picture']['data']['url'];

        $this->data['age'] = array_key_exists('birthday', $response) ?
            $this->getAge($response['birthday']) :  null;

        $this->data['gender'] = $response['gender'];
    }

    private function linkToUser()
    {
        if ($this->user !== null) {
            wp_set_auth_cookie($this->user->ID);

            $this->update();
        } else {
            $this->create();
        }
    }

    /*
     * Sets up4User properties
     */
    private function setData()
    {
        foreach ($this->data as $key => $value) {
            $this->up4User->{$key} = $value;
        }
    }

    private function update()
    {
        if ($this->up4User !== null) {
            $this->up4User->session_id = $this->up4Session->id;

            $this->setData();

            $this->updateMetaAndSave();
        } else {
            $this->create();
        }
    }

    private function create()
    {
        $wpUser = new WordpressUsers($this->name, $this->email);
        $this->user = $wpUser->setup();

        $this->setData();

        $this->up4User->facebook_id = $this->facebook_id;

        $this->up4User->user_id = $this->user->ID;

        $this->updateMetaAndSave();
    }

    private function updateMetaAndSave()
    {
        if ($this->up4User === null) return;

        $location = new Location();
        $weather = new Weather($location);

        $this->up4User->location = $weather->getOrigin();
        $this->up4User->temperature = $weather->getTemperature();
        $this->up4User->conditions = $weather->getConditions();

        $this->up4User->save();
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
    private function isFBUserLoggedIn()
    {
        $this->fb_user = Up4User::where('session_id', $this->up4Session->id)
            ->where('facebook_id', $this->facebook_id)->first();

        if (!$this->fb_user->id) {
            return true;
        }

        return false;
    }
}
