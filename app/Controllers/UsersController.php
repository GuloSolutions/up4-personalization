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
        $sess_id = $this->session_id;

        $current_user = Up4Session::where('sid', $sess_id)->first();

        $this->user = $current_user->up4user()->first();

        if (is_null($this->user))  {
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
        return $this->user;
    }

    public function getId()
    {
        return $this->user->id;
    }

    public function getFacebookId()
    {
        return $this->user->facebook_id;
    }

    public function getWeather()
    {
        return $this->user->weather;
    }

    public function getZip()
    {
        return $this->user->zip;
    }

    public function getlocalTime()
    {
        return $this->user->local_time;
    }
}
