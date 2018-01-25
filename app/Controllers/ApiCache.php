<?php
namespace Controllers;

use Stash;

class ApiCache
{

    const STRING_LENGTH = 10;

    public $driver;
    public $pool;
    public $cache;
    public $item;

    public function __construct()
    {
        $this->driver = new Stash\Driver\FileSystem(array());
        $this->pool = new Stash\Pool($this->driver);
        $this->cache = true;

    }

    public function getCachedItem ($cachedItem)
    {
        if ($this->getCache() === true)  {
            $this->item = $this->pool->getItem($cachedItem);
            $data = $this->item->get();
        }

        if ($data === false){
            return false;
        }

        return $data;
    }

    public function saveItemInCache ($data, $expiration)
    {
        $this->pool->save($this->item->set($data));
        $this->item->expiresAfter($expiration);
    }

    public function setCache()
    {
        $this->cache = true;
    }

    public function disableCache ()
    {
        $this->cache = false;
    }

    public function getCache()
    {
        return $this->cache;
    }

    public function getRandomKey()
    {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil(self::STRING_LENGTH/strlen($x)) )),1,self::STRING_LENGTH);
    }
}
