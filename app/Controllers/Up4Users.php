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
     * @var array
     */
    private $survey_data;

    /*
     * @var array
     */
    private $fb_data;

    /*
     * @var Up4User
     */
    private $to_migrate;

    /*
     * @var Up4User
     */
    private $to_move_from_survey;

    /*
     * @var Up4User
     */
    // private $to_move;

    public function __construct(\Models\Up4User $up4User, \Models\Up4Session $up4Session)
    {
        error_log(__METHOD__);
        $this->up4User = $up4User;

        $this->up4Session = $up4Session;
    }

    private function setFacebookUser()
    {
        error_log(__METHOD__);
        if($this->facebook_id) {
            $this->fb_user = Up4User::where('facebook_id', $this->facebook_id)
                ->first();
        }
    }

    public function checkFBUser()
    {
        error_log(__METHOD__);
        // generic logged in fb_user with session
        $this->setFacebookUser();

        // default method for checking against existing WP users
        $this->create();

        $this->linkWithFacebookUser();
    }

    public function checkSurveyUser()
    {
        error_log(__METHOD__);
        // generic logged in fb_user with session
        $this->setFacebookUser();

        $this->setObjectPropsFromData($this->up4User, $this->survey_data);

        $this->up4User->save();

        $this->create();

        $this->linkWithFacebookUser();
    }

    public function setupSurveyResponse($response)
    {
        error_log(__METHOD__);
        if ($response['gender'] && $response['age'] && !$this->up4User->age && !$this->up4User->gender) {
            $this->survey_data['gender'] = $response['gender'];
            $this->survey_data['age'] = $response['age'];
        }

        $this->survey_data['travels_often'] = filter_var($response['travels_often'], FILTER_VALIDATE_BOOLEAN);

        $this->survey_data['exercises_often'] = filter_var($response['exercises_often'], FILTER_VALIDATE_BOOLEAN);

        $this->survey_data['has_children'] = filter_var($response['has_children'], FILTER_VALIDATE_BOOLEAN);

        $health_needs = explode(",", $response['health_needs']);

        foreach ($health_needs as $key=>$value) {
            $value = strtolower($value);
            if (strpos($value, " ") !== false) {
                $first = explode(" ", $value);
                $value = $first[0];
            }

            $this->survey_data[$value] = 1;
        }
    }

    public function setupFacebookResponse($response)
    {
        error_log(__METHOD__);
        $this->facebook_id = $response['id'];

        $this->email = $response['email'];

        $this->name = $response['name'];

        $names = explode(' ', $this->name);

        // setup our up4 detail data
        $this->fb_data['facebook_id'] = $this->facebook_id;

        $this->fb_data['first_name'] = isset($response['first_name']) ? $response['first_name'] : $names[0];

        $this->fb_data['last_name'] = isset($response['last_name']) ? $response['last_name'] :
             (!empty($names[2]) ? $names[2] : (!empty($names[1]) ? $names[1] : ''));

        $this->fb_data['picture'] = $response['picture']['data']['url'];

        $this->fb_data['birthday'] = array_key_exists('birthday', $response) ?
            $response['birthday'] :  null;

        $this->fb_data['age'] = array_key_exists('birthday', $response) ?
            $this->getAge($response['birthday']) :  null;

        $this->fb_data['gender'] = $response['gender'];
    }

    private function linkWithFacebookUser()
    {
        error_log(__METHOD__);
error_log(print_r($this->up4User, true));
error_log(print_r($this->fb_user, true));
        // if previously logged in
        if ($this->fb_user->session_id != session_id()) {
            // get current wp user
            $wpUser = wp_get_current_user();
error_log(print_r($wpUser, true));
            if($this->fb_user->user_id != $wpUser->ID
                && !$this->isSurveyTaken()) {
                $this->to_move_from_survey = Up4User::where('session_id', session_id())->where('user_id', $wpUser->ID)->first();
            }

            if ($this->fb_user->user_id == $wpUser->ID
                && !$this->isSurveyTaken()) {
                $this->to_move_from_survey = Up4User::where('session_id', session_id())->whereNull('facebook_id')->first();
            }

error_log(print_r($this->to_move_from_survey, true));
            if (isset($this->to_move_from_survey->id)) {
                if ($this->fb_user->id && !$this->isSurveyTaken()) {
                    $this->copySurveyUserToFBUser($this->to_move_from_survey);
                }

                // delete temp survey user
                $this->removeSurveyUser($this->to_move_from_survey);
            }
        }
    }

    /*
     * Sets up4User properties
     */
    private function setData()
    {
        error_log(__METHOD__);
        if ($this->fb_data) {
            if ($this->fb_user->id !== null) {
                $this->fb_user->session_id = $this->up4Session->id;

                // delete temp user if survey data entered again
                Up4User::where('session_id', $this->fb_user->session_id)
                    ->whereNull('facebook_id')->delete();

                $this->fb_user->save();
            } else {
                $this->setObjectPropsFromData($this->up4User, $this->fb_data);

                $this->establishSession();
            }
        } else {
            $this->establishSession();
        }
    }

    private function create()
    {
        error_log(__METHOD__);
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
        error_log(__METHOD__);
        $location = new Location();
        $weather = new Weather($location);

        if (!empty($this->fb_user->id)
            && !isset($this->to_move_from_survey->id)) {
            $this->saveMetaData($this->fb_user, $weather);
        } elseif (!isset($this->fb_user->id)) {
            $this->saveMetaData($this->up4User, $weather);
        }
    }

    /*
     * @param string date
     * @return int age
     */
    private function getAge($birthday)
    {
        error_log(__METHOD__);
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
        error_log(__METHOD__);
        return is_null($this->up4User->digestive) &&
            is_null($this->up4User->immune) &&
                is_null($this->up4User->vaginal) &&
                    is_null($this->up4User->urinary) &&
                        is_null($this->up4User->heart) ? false : true;
    }

    public function removeSurveyUser(Up4Users $user)
    {
        error_log(__METHOD__);
        if (!is_null($user->id)) {
            User::destroy($user->id);
        }
    }

    private function copySurveyUserToFBUser(Up4User $user)
    {
        error_log(__METHOD__);
        $this->fb_user->travels_often = $user->travels_often;
        $this->fb_user->exercises_often = $user->exercises_often;
        $this->fb_user->has_children = $user->has_children;
        $this->fb_user->digestive = $user->digestive;
        $this->fb_user->immune = $user->immune;
        $this->fb_user->vaginal = $user->vaginal;
        $this->fb_user->urinary = $user->urinary;
        $this->fb_user->heart = $user->heart;

        $this->fb_user->save();

        $this->create();
    }

    private function saveMetaData(Up4User $object, Weather $local_weather)
    {
        error_log(__METHOD__);
        $object->location = $local_weather->getOrigin();
        $object->temperature = $local_weather->getTemperature();
        $object->conditions = $local_weather->getConditions();
        $object->local_time = $local_weather->getLocalTime();

        $object->save();
    }

    private function setObjectPropsFromData(&$object, $data)
    {
        error_log(__METHOD__);
        if (is_object($object)) {
            foreach ($data as $key => $value) {
                // if ($value !== null) {
                if (!empty($value)) {
                    $object->{$key} = $value;
                }
            }
        }
    }

    private function establishSession()
    {
        error_log(__METHOD__);
        $this->up4User->session_id = $this->up4Session->id;
        $this->up4User->user_id = $this->user->ID;
    }
}
