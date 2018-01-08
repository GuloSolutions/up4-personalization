<?php
namespace Models;

use Illuminate\Database\Capsule\Manager as Capsule;

class Database
{
    /**
     * @var \Illuminate\Database\Capsule\Manager $capsule
     */
    public $capsule;
    /**
     * @var \Illuminate\Database\Schema\Builder $capsule
     */
    public $schema;

    public function __construct()
    {
        $this->capsule = new Capsule;
        $this->capsule->addConnection(
            [
            'driver'    => 'mysql',
            'host'      => 'localhost',
            'port'      => '3306',
            'database'  => 'probiotics',
            'username'  => 'probiotics',
            'password'  => 'Sn5xd9GZjrzLP1Pq',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => 'ye3a_'
            ]
        );

        $this->capsule->setAsGlobal();
        $this->schema = $this->capsule->schema();
        $this->capsule->bootEloquent();
    }
}

