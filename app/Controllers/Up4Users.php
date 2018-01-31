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
    private $survey_data;


    private $fb_data;

    private $to_migrate;


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

                $this->survey_data['gender'] = $response['gender'] == 'yes' ? 'female' : 'male';

                $this->survey_data['age'] = $response['age'];
            }

            $this->survey_data['travels_often'] = filter_var($response['travels_often'], FILTER_VALIDATE_BOOLEAN);

            $this->survey_data['exercises_often'] = filter_var($response['exercises_often'], FILTER_VALIDATE_BOOLEAN);

            $this->survey_data['has_children'] = filter_var($response['has_children'], FILTER_VALIDATE_BOOLEAN);
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
        if (!$this->isSurveyTaken()) {
            $this->up4User->travels_often = $this->survey_data['travels_often'];
            $this->up4User->exercises_often = $this->survey_data['exercises_often'];
            $this->up4User->has_children = $this->survey_data['has_children'];

            if ($this->survey_data['age'] &&  $this->survey_data['gender']) {
                $this->up4User->age = $this->survey_data['age'];
                $this->up4User->gender = $this->survey_data['gender'];
            }
        }

        $this->create();
    }

    private function linkFacebookUser()
    {
        $to_move = Up4User::where('user_id', wp_get_current_user()->ID)->first();

        $this->to_migrate = Up4User::where('facebook_id', $this->facebook_id)->first();

        if ($this->to_migrate->id && $this->to_migrate->travels_often === null) {
            $this->to_migrate->session_id = $this->up4Session->id;

            $this->to_migrate->travels_often = $to_move->travels_often;
            $this->to_migrate->exercises_often = $to_move->exercises_often;
            $this->to_migrate->has_children = $to_move->has_children;

            if ($to_move->age &&  $to_move->gender) {
                $to_migrate->age = $to_move->age;
                $this->to_migrate->gender = $to_move->gender;
            }

            $cur_session = $this->up4User->session_id;

            Up4User::where('session_id', $cur_session)->delete();

            $this->to_migrate->session_id = $cur_session;

            $this->to_migrate->save();
        } elseif ($this->to_migrate && !$this->survey_data) {
            $this->setData();
        } else {
            $this->create();
        }
    }

    /*
     * Sets up4User properties
     */
    private function setData()
    {
        if ($this->fb_data) {
            $this->current = Up4User::where('facebook_id', $this->facebook_id)->first();

            if ($this->current->id != null) {
                $this->current->session_id = $this->up4Session->id;

                $this->current->save();
                $this->updateMetaAndSave();
            } else {
                foreach ($this->fb_data as $key => $value) {
                    if ($value !== null) {
                        $this->up4User->{$key} = $value;
                    }
                }

                $this->up4User->session_id = $this->up4Session->id;
                $this->up4User->user_id = $this->user->ID;
            }
        }

        if ($this->survey_data && $this->current) {
            foreach ($this->survey_data as $key => $value) {
                if ($value !== null) {
                    $this->current->{$key} = $value;
                }
            }
        }
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
        if ($this->current->id) {
            $location = new Location();
            $weather = new Weather($location);

            $this->up4User->location = $weather->getOrigin();
            $this->up4User->temperature = $weather->getTemperature();
            $this->up4User->conditions = $weather->getConditions();

            $this->current->save();

            wp_set_auth_cookie($this->current->user_id);

            Up4User::whereNull('id')->delete();
        } else {
            $location = new Location();
            $weather = new Weather($location);

            $this->up4User->location = $weather->getOrigin();
            $this->up4User->temperature = $weather->getTemperature();
            $this->up4User->conditions = $weather->getConditions();

            $this->up4User->user_id = $this->user->ID;

            $this->up4User->save();
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


    public function checkIfExistsWordpressUser()
    {
        $this->user = User::where('user_email', $this->email);
        if ($this->user->ID) {
            wp_set_auth_cookie($this->user->ID);
        }
    }
}
