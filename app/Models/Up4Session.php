<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class Up4Session extends Model
{
    protected $table = 'sessions';
    protected $fillable = ['sid', 'expiry', 'data'];
    public $timestamps = true;

    public function up4User()
    {
        return $this->hasOne('Models\Up4User', 'sessions_id');
    }
}
