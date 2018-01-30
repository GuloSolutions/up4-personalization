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



    private $userid_to_delete;

    /*
     * @var array
     */
    private $data;

    public function __construct(\Models\Up4User $up4User, \Models\Up4Session $up4Session)
    {
        $this->up4User = $up4User;

        $this->up4Session = $up4Session;
    }

    private function lookupFacebookUser()
    {
        return Up4User::where('facebook_id', $this->facebook_id)
                ->first();
    }

    public function checkFBUser()
    {
        $this->linkFacebookUser();
    }

    public function checkSurveyUser()
    {
        $this->linkSurveyUser();
    }

    public function setupSurveyResponse($response)
    {
        if ($this->lookupFacebookUser()) {
            $this->data['travels_often'] = filter_var($response['travels_often'], FILTER_VALIDATE_BOOLEAN);

            $this->data['exercises_often'] = filter_var($response['exercises_often'], FILTER_VALIDATE_BOOLEAN);

            $this->data['has_children'] = filter_var($response['has_children'], FILTER_VALIDATE_BOOLEAN);
        } else {
            $this->data['gender'] = $response['gender'] == 'yes' ? 'female' : 'male';

            $this->data['age'] = $response['age'];

            $this->data['travels_often'] = filter_var($response['travels_often'], FILTER_VALIDATE_BOOLEAN);

            $this->data['exercises_often'] = filter_var($response['exercises_often'], FILTER_VALIDATE_BOOLEAN);

            $this->data['has_children'] = filter_var($response['has_children'], FILTER_VALIDATE_BOOLEAN);
        }
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

    private function linkSurveyUser()
    {
        if (!$this->isSurveyTaken()) {
            $this->up4User->travels_often = $this->data['travels_often'];
            $this->up4User->exercises_often = $this->data['exercises_often'];
            $this->up4User->has_children = $this->data['has_children'];

            if ($this->data['age'] &&  $this->up4User['gender']) {
                $this->up4User->age = $this->data['age'];
                $this->up4User->gender = $this->data['gender'];
            }
        }

        if ($this->up4User->facebook_id && !$this->user) {
            $this->user = $this->up4User->user;
            $this->update();
        } elseif (!$this->up4User->facebook_id && !$this->user) {
            $this->create();
        }

        $this->up4User->save();
    }

    private function linkFacebookUser()
    {
        if ($this->lookupFacebookUser() && !$this->isSurveyTaken()) {
            $to_delete_up4_user = Up4User::whereNull('facebook_id')
                    ->where('session_id', session_id)
                    ->first();

            Up4User::find($to_delete_up4_user->id)->delete();
        }



        if ($this->user) {
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
        $this->up4User->session_id = $this->up4Session->id;

        $this->up4User->user_id = $this->user->ID;


        foreach ($this->data as $key => $value) {
            if ($value !== null) {
                $this->up4User->{$key} = $value;
            }
        }

        $this->up4User->save();
    }

    private function update()
    {
        if ($this->up4User->facebook_id != null) {
            $this->updateMetaAndSave();
        }
    }

    private function create()
    {
        if (!empty($this->name) && !empty($this->email)) {
            $wpUser = new WordpressUsers($this->name, $this->email);
        } else {
            $wpUser = new WordpressUsers();
        }

        $this->user = $wpUser->setup();

        $this->setData();

        wp_set_auth_cookie($this->user->ID);

        $this->updateMetaAndSave();
    }

    private function updateMetaAndSave()
    {
        if ($this->up4User === null) {
            return;
        }

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
        if (!$birthday) {
            return null;
        }

        $birthday = new Carbon($birthday);

        return $birthday->diffInYears();
    }

    /*
     * @param null
     * @return bool
     */
    public function isSurveyTaken()
    {
        return is_null($this->up4User->travels_often) ||
                is_null($this->up4User->exercises_often) ||
                    is_null($this->up4User->has_children) ? false : true;
    }

    public function isFBLoggedIn()
    {
        $is = Up4User::where('facebook_id', $this->facebook_id)
            ->where('session_id', $this->up4Session->id)
            ->first();

        return $is->id;
    }
}
