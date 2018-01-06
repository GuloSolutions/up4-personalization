<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class FacebookUser extends Model

{
    protected $table = 'facebookusers';
    protected $fillable = ['age', 'digestiveHealth'];
    public $timestamps = false;
}
