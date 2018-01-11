<?php
namespace Models;

use Illuminate\Database\Eloquent\Model;

class Up4Session extends Model
{
    protected $table = 'sessions';

    protected $fillable = ['sid', 'expiry', 'data'];

    public $timestamps = true;

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function($model)
        {
            if ($model->forceDeleting) {
                $model->roles()->detach();
            }
        });
    }

    public function up4User()
    {
        return $this->hasOne('Models\Up4User', 'session_id');
    }
}
