<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $primaryKey = 'ID';

    protected $fillable = [
        'user_login', 'user_pass', 'user_nicename',
        'user_url', 'user_email', 'user_registered',
        'user_activation_key', 'user_status', 'display_name'
    ];

    public $timestamps = false;
}
