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
        global $table_prefix;

        $this->capsule = new Capsule;

        $this->capsule->addConnection([
            'driver'    => 'mysql',
            'host'      => defined('DB_HOST') && !empty(DB_HOST) ? DB_HOST : 'localhost',
            'port'      => '3306',
            'database'  => defined('DB_NAME') && !empty(DB_NAME) ? DB_NAME : 'up4-probiotics',
            'username'  => defined('DB_USER') && !empty(DB_USER) ? DB_USER : 'up4-probiotics',
            'password'  => defined('DB_PASSWORD') && !empty(DB_PASSWORD) ? DB_PASSWORD : 'Sn5xd9GZjrzLP1Pq',
            'charset'   => defined('DB_CHARSET') && !empty(DB_CHARSET) ? DB_CHARSET : 'utf8',
            'collation' => defined('DB_COLLATE') && !empty(DB_COLLATE) ? DB_COLLATE : 'utf8_unicode_ci',
            'prefix'    => !empty($table_prefix) ? $table_prefix : 'ye3a_'
        ]);

        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();

        $this->schema = $this->capsule->schema();
    }
}
