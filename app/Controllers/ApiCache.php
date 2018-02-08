<?php
namespace Controllers;

use Stash;

class ApiCache
{
    const CACHE_EXPIRE = 3600;

    private $driver;
    private $pool;
    private $cache;
    private $item;
    private $expiration;

    public function __construct($expiration)
    {
        $this->driver = new Stash\Driver\FileSystem(array());
        $this->pool = new Stash\Pool($this->driver);
        $this->expiration = !is_null($expiration) ? $expiration : self::CACHE_EXPIRE;
        $this->setCache(true);
    }

    public function getCachedItem($cachedItem)
    {
        if ($this->getCache() === true) {
            $this->item = $this->pool->getItem($cachedItem);
            $data = $this->item->get();
        }

        if ($data === false) {
            return false;
        }

        return $data;
    }

    public function saveItemInCache($data)
    {
        if ($this->getCache() === true) {
            $this->pool->save($this->item->set($data));
            $this->item->expiresAfter($this->expiration);
        }
    }

    public function setCache(bool $value)
    {
        $this->cache = $value;
    }

    public function disableCache()
    {
        $this->cache = false;
    }

    public function getCache()
    {
        return $this->cache;
    }

    public function setExpiration($expiration)
    {
        $this->expiration = $expiration;
    }
}
