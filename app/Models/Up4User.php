<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class Up4User extends Model
{
    protected $table = 'up4_users';
    protected $fillable = ['age', 'first_name', 'last_name','sess', 'sessions_id', 'facebook_id', 'digestive_health', 'zip', 'weather', 'local_time'];
    public $timestamps = true;

    public function up4session()
    {
        return $this->belongsTo('Models\Up4Session', 'id');
    }
}
