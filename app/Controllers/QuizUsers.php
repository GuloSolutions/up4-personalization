<?php
namespace Controllers;

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model as Model;
use Models\FacebookUser;
use Models\WordPressClient;
use Controllers\UsersController;

class QuizUsers extends UsersController
{
    public function __construct()
    {
        $parent::__construct();
    }
}
