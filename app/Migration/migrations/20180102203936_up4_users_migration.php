<?php

use Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

class Up4UsersMigration extends Migration
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
        $this->schema->create(
            'up4_users', function (Blueprint $table) {
                $table->increments('id');

                $table->integer('session_id')->unsigned()->nullable();
                $table->bigInteger('user_id')->unsigned()->nullable();
                $table->string('facebook_id', 40)->nullable();

                $table->string('first_name', 40)->nullable();
                $table->string('last_name', 40)->nullable();
                $table->string('picture')->nullable();

                $table->string('gender', 10)->nullable();
                $table->int('age', 2)->nullable();

                $table->boolean('travels_often')->nullable();
                $table->boolean('has_children')->nullable();
                $table->boolean('exercises_often')->nullable();
                $table->boolean('digestive')->nullable();
                $table->boolean('immune')->nullable();
                $table->boolean('vaginal')->nullable();
                $table->boolean('urinary')->nullable();
                $table->boolean('heart')->nullable();

                $table->string('location')->nullable();
                $table->string('temperature', 5)->nullable();
                $table->string('conditions')->nullable();
                $table->string('local_time')->nullable();


                $table->timestamps();

                $table->foreign('session_id')
                    ->references('id')->on('sessions')
                    ->onDelete('set null');

                $table->foreign('user_id')
                    ->references('ID')->on('users')
                    ->onDelete('cascade');
            }
        );
    }
}
