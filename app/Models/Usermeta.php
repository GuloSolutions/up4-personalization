<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class Usermeta extends Model
{
    protected $table = 'usermeta';
    protected $fillable = ['user_id','meta_key', 'meta_value'];
    public $timestamps = false;
}
