<?php
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Eloquent\Model as Model;
use Models\Session;
use Models\Database;

class Up4_Session_Handler implements SessionHandlerInterface
{
    protected $expiry;

    protected $collectGarbage = false;

    public function __construct()
    {
        $this->expiry = 3600;
        error_log(print_r('iAM HERE NOW', true), 3, '/tmp/my-errors.log');
    }

    /**
     * Opens the session
     *
     * @param string $save_path
     * @param string $name
     * @return bool
     */
    public function open($save_path, $name)
    {
        return true;
    }

    /**
     * Reads the session data
     *
     * @param string $session_id
     * @return string
     */
    public function read($session_id)
    {
        $sess = Session::where('sid', $session_id)->first();
         if (!is_null($sess)) {
            return $sess;
         } else {
            return '';
         }
    }

    /**
     * Writes the session data to the database
     *
     * @param string $session_id
     * @param string $data
     * @return bool
     */
    public function write($session_id, $data)
    {
        $sess = new Session();
        $sess->sid = $session_id;
        $sess->data = $data;
        $sess->expiry = $this->expiry;
        $sess->save();

        return true;
    }

    /**
     * Closes the session and writes the session data to the database
     *
     * @return bool
     */
    public function close()
    {
        if ($this->collectGarbage) {
            $deleted = Session::where('expiry', '<' , time())->delete();
            $this->collectGarbage = false;
        }
        return true;
    }

    public function destroy($session_id)
    {
        $sess = Session::where('sid', $session_id)->delete();
    }

    public function gc($maxlifetime)
    {
        $this->collectGarbage = true;
        return true;
    }
}

