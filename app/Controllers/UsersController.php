<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\Up4User;
use Models\Up4Session;

class UsersController
{
    public $session_id;

    public $user;

    public function __construct()
    {
        $this->session_id = session_id();

        $this->set();
    }

    private function set()
    {
        $up4_session = Up4Session::where('sid', $this->session_id)->first();

        if (!is_null($up4_session)) {
            $this->user = $up4_session->up4User()->first();
        }

        if (is_null($this->user)) {
            $this->user = new Up4User();
        }
    }

    /*
     * @return boolean
     */
    public function isLoggedIn()
    {
        return $this->user->id ? true : false;
    }

    /*
     * @return Up4User
     */
    public function get()
    {
        return $this->user;
    }

    /*
     * @return string
     */
    public function getName()
    {
        return $this->user->first_name;
    }

    /*
     * @return int
     */
    public function getId()
    {
        return $this->user->id;
    }

    /*
     * @return int
     */
    public function getFacebookId()
    {
        return $this->user->facebook_id;
    }

    /*
     * @return string
     */
    public function getConditions()
    {
        return $this->user->conditions;
    }

    /*
     * @return string
     */
    public function getWeather()
    {
        return $this->user->weather;
    }

    /*
     * @return string
     */
    public function getZip()
    {
        return $this->user->zip;
    }

    /*
     * @return string
     */
    public function getOrigin()
    {
        return $this->user->location;
    }

    /*
     * @return string
     */
    public function getProfilePictureUrl()
    {
        return $this->user->picture;
    }
}
