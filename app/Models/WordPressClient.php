<?php
namespace Models;

use Illuminate\Database\Eloquent\Model as Model;

class WordPressClient extends Model
{
    protected $table = 'users';

    public $timestamps = false;

    protected $fillable = ['id', 'user_email',
        'user_login', 'user_url',
        'user_registered', 'user_activation_key',
        'user_status', 'display_name'];
}
