<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class Up4User extends Model
{
    protected $table = 'up4_users';

    protected $fillable = [
        'age', 'first_name', 'last_name','session_id',
        'facebook_id', 'gender', 'zip',
        'has_children', 'travels_often', 'exercises_often',
        'weather', 'local_time', 'picture'
    ];

    public $timestamps = true;

    public function up4Session()
    {
        return $this->belongsTo('Models\Up4Session', 'session_id');
    }

    public function user()
    {
        return $this->belongsTo('Models\User', 'user_id');
    }
}
