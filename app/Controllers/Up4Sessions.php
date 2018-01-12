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

    /*
     * @return Boolean
     */
    public function open($save_path, $name)
    {
        return true;
    }

    /*
     * @return String
     */
    public function read($session_id)
    {
        $sess = Up4Session::where('sid', $session_id)->first();

        if ($sess instanceof \Models\Up4Session) {
            return $sess->data;
        } else {
            return '';
        }
    }

    /*
     * @return Boolean
     */
    public function write($session_id, $data)
    {
        $session = Up4Session::firstOrNew(['sid' =>  $session_id]);

        $session->data = $data;
        $session->expiry = $this->expiry;

        $session->save();

        return true;
    }

    /*
     * @return Boolean
     */
    public function close()
    {
        return true;
    }

    /*
     * @return Boolean
     */
    public function destroy($session_id)
    {
        $sess = Up4Session::where('sid', $session_id)->delete();

        return true;
    }

    /*
     * @return Boolean
     */
    public function gc($maxlifetime)
    {
        if($maxlifetime < time()) {
            $deleted = Up4Session::where('created_at', '<', date('Y-m-d'))->delete();
            $this->collectGarbage = true;
        }

        return true;
    }

     public function updateTimestamp($session_id, $data)
     {
            Up4Session::where('sid', session_id)
                ->update([
                    'data' => $data,
                    'expiry' => $this->expiry
                ]);

            return true;
     }
}
