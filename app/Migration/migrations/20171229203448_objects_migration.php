<?php

use Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

class ObjectsMigration extends Migration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function up()
    {
        // $this->schema->create('userobjects', function($table){
        //     $table->increments('id');
        //     $table->bigInteger('ye3a_users_id');
        //     // Required for Eloquent's created_at and updated_at columns

        //     $table->foreign('ye3a_users_id')
        //       ->references('id')->on('ye3a_users')
        //       ->onDelete('cascade');
        // }

    Capsule::schema()->create('ye3a_newusers', function (Blueprint $table) {
    $table->increments('id');
    $table->string('email')->unique();
    ///$table->timestamps();
        });
    }
}
