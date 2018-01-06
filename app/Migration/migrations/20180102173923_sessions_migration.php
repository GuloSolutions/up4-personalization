<?php

use Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

class SessionsMigration extends Migration
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
    public function up()  {

        $this->schema->create('ye3a_sessions', function(Blueprint $table){
            $table->increments('id');
            $table->string('sid', 50);
            $table->integer('expiry');
            $table->string('data', 100);
            $table->timestamps();
        });
    }
}
