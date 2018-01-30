<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\Up4User;
use Models\Up4Session;
use Carbon\Carbon;

class Up4
{
    public $session_id;

    public $up4User;

    public $up4Session;

    public function __construct($session_id)
    {
        $this->session_id = $session_id;
    }

    public function init()
    {
        $this->up4Session = Up4Session::where('sid', $this->session_id)
            ->first();

        if (is_null($this->up4Session)) {
            $this->up4Session = new up4Session();
        }

        if (!is_null($this->up4Session)) {
            $this->up4User = $this->up4Session->up4User()->first();
        }

        if (is_null($this->up4User)) {
            $this->up4User = new Up4User();
        }
    }

    /*
     * @return boolean
     */
    public function isSurveyTaken()
    {
        return is_null($this->up4User->travels_often) ||
                is_null($this->up4User->exercises_often) ||
                    is_null($this->up4User->has_children) ? false : true;
    }

    /*
     * @return boolean
     */
    public function isLoggedInFacebook()
    {
        return $this->up4User->facebook_id ? true : false;
    }

    /*
     * @return boolean
     */
    public function isLoggedIn()
    {
        return $this->up4User->id ? true : false;
    }

    /*
     * @return Up4User
     */
    public function get()
    {
        return $this->up4User;
    }

    /*
     * @return string
     */
    public function getName()
    {
        return $this->up4User->first_name;
    }

    /*
     * @return int
     */
    public function getId()
    {
        return $this->up4User->id;
    }

    /*
     * @return int
     */
    public function getFacebookId()
    {
        return $this->up4User->facebook_id;
    }

    /*
     * @return string
     */
    public function getConditions()
    {
        return $this->up4User->conditions;
    }

    /*
     * @return string
     */
    public function getWeather()
    {
        return $this->up4User->temperature;
    }

    /*
     * @return string
     */
    public function getZip()
    {
        return $this->up4User->zip;
    }

    /*
     * @return string
     */
    public function getOrigin()
    {
        return $this->up4User->location;
    }

    /*
     * @return string
     */
    public function getProfilePictureUrl()
    {
        return $this->up4User->picture;
    }

    /*
     * @return string
     */
    public function getLocalTime()
    {
        return Carbon::now($this->up4User->local_time)->format('g:i A');
    }
}
