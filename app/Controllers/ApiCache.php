<?php
namespace Controllers;

use Stash;

class ApiCache
{
    public $driver;
    public $pool;
    public $cache;
    public $item;

    public function __construct()
    {
        $this->driver = new Stash\Driver\FileSystem(array());
        $this->pool = new Stash\Pool($this->driver);
        $this->setCache();
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

    public function saveItemInCache ($data)
    {
        $this->pool->save($this->item->set($data));
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

    public function setExpirationTime($expiration)
    {
        $this->item->expiresAfter($expiration);
    }
}
