<?php
namespace Controllers;

class Cachekey
{
    private static $instance;
    private $key = array();

    const STRING_LENGTH = 10;

    const KEYS_TO_MAKE = 2;

    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (empty(self::$instance)) {
            self::$instance = new Cachekey();
        }
        return self::$instance;
    }
    public function setKey()
    {
        for ($i=0; $i <= self::KEYS_TO_MAKE; $i++) {
            $this->key[] = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil(self::STRING_LENGTH/strlen($x)))), 1, self::STRING_LENGTH);
        }
    }
    public function getKey()
    {
        $keys = array();
        $keys = $this->key;

        return $keys;
    }
}
