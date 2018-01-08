<?php

use Illuminate\Database\Capsule\Manager as Capsule;

class Database {
    /** @var \Illuminate\Database\Capsule\Manager $capsule */
    public $capsule;
    /** @var \Illuminate\Database\Schema\Builder $capsule */
    public $schema;

    public function __construct()  {
        $this->capsule = new Capsule;
        $this->capsule->addConnection([
          'driver'    => 'mysql',
          'host'      => 'localhost',
          'port'      => '3306',
          'database'  => 'DB_NAME',
          'username'  => 'DB_USER',
          'password'  => 'DB_PASSWORD',
          'charset'   => 'utf8',
          'collation' => 'utf8_unicode_ci',
          'prefix' => 'ye3a_'
        ]);

        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();
    }
}
// new Database;
