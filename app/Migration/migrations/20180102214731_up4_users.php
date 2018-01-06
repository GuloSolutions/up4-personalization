<?php

use Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

class Up4Users extends Migration
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
        $this->schema->create('ye3a_up4users', function(Blueprint $table){
            $table->increments('id');
            $table->string('cookie', 50)->nullable();
            $table->integer('facebook_id')->nullable();
            $table->boolean('gender')->nullable();
            $table->integer('age')->nullable();
            $table->boolean('hasChildren')->nullable();
            $table->boolean('travels')->nullable();
            $table->integer('zip')->nullable();
            $table->boolean('travelsOften')->nullable();
            $table->boolean('is50plus')->nullable();
            $table->boolean('isMom')->nullable();
            $table->boolean('exercisesDaily')->nullable();
            $table->boolean('digestiveHealth')->nullable();
            $table->boolean('isMom')->nullable();
            $table->boolean('immuneSystemHealth')->nullable();
            $table->boolean('urinaryHealth')->nullable();
            $table->boolean('womensHealth')->nullable();
            $table->boolean('cholesterolHealth')->nullable();
            $table->boolean('colonHealth')->nullable();

            $table->timestamps();
        }
    }
}
