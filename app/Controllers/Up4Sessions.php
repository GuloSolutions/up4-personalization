<?php
namespace Controllers;

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\Model as Model;
use Models\Up4Session;
use Models\Up4User;
use Models\Database;

class Up4Sessions implements \SessionHandlerInterface
{
    const CACHE_TIME = 60*60*24;

    protected $expiry;

    protected $collectGarbage = false;

    public function __construct()
    {
        $this->expiry = time() + self::CACHE_TIME;
    }

    public function open($save_path, $name)
    {
        return true;
    }

    public function read($session_id)
    {
        $sess = Up4Session::where('sid', $session_id)->first();

        if (!is_null($sess)) {
            return $sess;
        } else {
            return '';
        }
    }

    public function write($session_id, $data)
    {
        $sess_write = Up4Session::firstOrNew(['sid' =>  $session_id, 'data' => $data, 'expiry' => $this->expiry]);
        $sess_write->save();

        $user_sess = Up4User::firstOrNew(['sessions_id' => $sess_write->id]);
        $user_sess->save();

        return true;
    }

    public function close()
    {
        $deleted = Up4Session::where('created_at', '<', date('Y-m-d'))->delete();
        return true;
    }

    public function destroy($session_id)
    {
        $sess = Up4Session::where('sid', $session_id)->delete();
        return true;
    }

    public function gc($maxlifetime)
    {
        $deleted = Up4Session::where('created_at', '<', date('Y-m-d'))->delete();
        $this->collectGarbage = true;
        return true;
    }
}
