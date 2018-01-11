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

    public function isLoggedIn()
    {
        return $this->user->id ? true : false;
    }

    public function get()
    {
        return $this->user;
    }

    public function getName()
    {
        return $this->user->first_name;
    }

    public function getId()
    {
        return $this->user->id;
    }

    public function getFacebookId()
    {
        return $this->user->facebook_id;
    }

    public function getConditions()
    {
        return $this->user->conditions;
    }

    public function getWeather()
    {
        return $this->user->weather;
    }

    public function getZip()
    {
        return $this->user->zip;
    }

    public function getOrigin()
    {
        return $this->user->location;
    }
}
