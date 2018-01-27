<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class UserObject extends Model
{
    protected $table = 'ye3a_userobjects';
    protected $fillable = ['age', 'digestiveHealth'];
    public $timestamps = false;
}
