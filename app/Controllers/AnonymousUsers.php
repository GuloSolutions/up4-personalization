<?php
namespace Controllers;

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model as Model;
use Models\FacebookUser;
use Models\WordPressClient;
use Models\Up4Session;

class AnonymousUsers
{
    public function __construct()
    {
    }

    public static function getUserObject()
    {
        $id = session_id();
        $user = Up4Session::where('sid', $id)->first();
        return $user;
    }
}
