<?php
namespace Models;
use Illuminate\Database\Eloquent\Model as Model;

class Client extends Illuminate\Database\Eloquent\Model
{
    protected $table = 'ye3a_facebookusers';

    public $timestamps = false;

    protected $fillable = ['age'];
}
