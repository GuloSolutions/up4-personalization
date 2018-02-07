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
    private $to_move;


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
        if ($response['gender'] && $response['age']) {
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

        $this->fb_data['age'] = array_key_exists('birthday', $response) ?
            $this->getAge($response['birthday']) :  null;

        $this->fb_data['gender'] = $response['gender'];
    }

    private function linkSurveyUser()
    {
        $this->saveSurveyUser();
        $this->create();
    }

    private function linkFacebookUser()
    {
        //generic logged in fb_user with session
        $this->fb_user = Up4User::where('facebook_id', $this->facebook_id)->first();

        //if previously logged in
        if ($this->fb_user->session_id != session_id() && $this->fb_user->travels_often == null && $this->fb_user->user_id != wp_get_current_user()->ID) {
            $this->to_move = Up4User::where('session_id', session_id())->where('user_id', wp_get_current_user()->ID)->first();
        }
        if ($this->fb_user->session_id != session_id() && $this->fb_user->travels_often == null && $this->fb_user->user_id == wp_get_current_user()->ID) {
            $this->to_move_from_survey = Up4User::where('session_id', session_id())->whereNull('facebook_id')->first();
        }
        //default method for checking against existing WP users
        $this->create();

        if (isset($this->to_move_from_survey->id)) {
            if ($this->fb_user->id && $this->fb_user->travels_often === null) {
                $this->saveSurveyUserData($this->to_move_from_survey);
                //delete temp survey user
                $this->removeTempSurveyUser($this->to_move_from_survey);
            }
        }
        if (isset($this->to_move->id)) {
            if ($this->fb_user->id && $this->fb_user->travels_often === null) {
                $this->saveSurveyUserData($this->to_move);
            }
        }
    }

    /*
     * Sets up4User properties
     */
    private function setData()
    {
        if ($this->fb_data) {
            if ($this->fb_user->id !== null) {
                $this->fb_user->session_id = $this->up4Session->id;

                //delete temp user if survey data entered again
                Up4User::where('session_id', $this->fb_user->session_id)
                    ->whereNull('facebook_id')->delete();

                $this->fb_user->save();
            } else {
                foreach ($this->fb_data as $key => $value) {
                    if ($value !== null) {
                        $this->up4User->{$key} = $value;
                    }
                }

                $this->up4User->session_id = $this->up4Session->id;
                $this->up4User->user_id = $this->user->ID;
            }
        } else {
            $this->up4User->session_id = $this->up4Session->id;
            $this->up4User->user_id = $this->user->ID;
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
        $location = new Location();
        $weather = new Weather($location);
        if ($this->fb_user->id && (is_null($this->to_move->id) && is_null($this->to_move_from_survey->id))) {
            $this->saveMetaData($this->fb_user, $weather);
        } elseif (!$this->fb_user->id) {
            $this->saveMetaData($this->up4User, $weather);
        }
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

    public function removeTempSurveyUser(Up4Users $user)
    {
        if (!is_null($user->id)) {
            User::find($user->user_id)->delete();
        }
    }

    private function saveSurveyUserData(Up4User $user)
    {
        $this->fb_user->travels_often = $user->travels_often;
        $this->fb_user->exercises_often = $user->exercises_often;
        $this->fb_user->has_children = $user->has_children;
        $this->fb_user->digestive = $user->digestive;
        $this->fb_user->immune = $user->immune;
        $this->fb_user->vaginal = $user->vaginal;
        $this->fb_user->urinary = $user->urinary;
        $this->fb_user->heart = $user->heart;

        if (!is_null($user->age) &&  !is_null($user->gender)) {
            $this->fb_user->age = $user->age;
            $this->fb_user->gender = $user->gender;
        }
        $this->fb_user->save();
        $this->create();
    }

    private function saveSurveyUser()
    {
        $this->up4User->travels_often = $this->survey_data['travels_often'];
        $this->up4User->exercises_often = $this->survey_data['exercises_often'];
        $this->up4User->has_children = $this->survey_data['has_children'];
        $this->up4User->digestive = $this->survey_data['digestive'] ? 1 : 0;
        $this->up4User->immune = $this->survey_data['immune']  ? 1 : 0;
        $this->up4User->vaginal = $this->survey_data['vaginal']  ? 1 : 0;
        $this->up4User->urinary = $this->survey_data['urinary']  ? 1 : 0;
        $this->up4User->heart = $this->survey_data['heart']  ? 1 : 0;

        if ($this->survey_data['age'] &&  $this->survey_data['gender']) {
            $this->up4User->age = $this->survey_data['age'];
            $this->up4User->gender = $this->survey_data['gender'];
        }

        $this->up4User->save();
    }

    public function saveFacebookSurveyUser(Up4User $user)
    {
        $user->travels_often = $this->survey_data['travels_often'];
        $user->exercises_often = $this->survey_data['exercises_often'];
        $user->has_children = $this->survey_data['has_children'];
        $user->digestive = $this->survey_data['digestive'] ? 1 : 0;
        $user->immune = $this->survey_data['immune']  ? 1 : 0;
        $user->vaginal = $this->survey_data['vaginal']  ? 1 : 0;
        $user->urinary = $this->survey_data['urinary']  ? 1 : 0;
        $user->heart = $this->survey_data['heart']  ? 1 : 0;

        if ($this->survey_data['age'] &&  $this->survey_data['gender']) {
            $user->age = $this->survey_data['age'];
            $user->gender = $this->survey_data['gender'];
        }

        $user->save();
    }

    private function saveMetaData($current_user, Weather $local_weather)
    {
        $current_user->location = $local_weather->getOrigin();
        $current_user->temperature = $local_weather->getTemperature();
        $current_user->conditions = $local_weather->getConditions();
        $current_user->local_time = $local_weather->getLocalTime();

        $current_user->save();
    }
}
