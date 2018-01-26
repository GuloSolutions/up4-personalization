<?php
namespace Controllers;

use Stash;

class ApiCache
{
    const CACHE_EXPIRE = 3600;

    public $driver;
    public $pool;
    public $cache;
    public $item;
    public $expiration;

    public function __construct( $expiration )
    {
        $this->driver = new Stash\Driver\FileSystem(array());
        $this->pool = new Stash\Pool($this->driver);
        $this->expiration = is_null($expiration) ? $expiration : self::CACHE_EXPIRE;
        $this->setCache(true);

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
        $this->item->expiresAfter($this->expiration);
    }

    public function setCache( bool $value)
    {
        $this->cache = $value;
    }

    public function disableCache ()
    {
        $this->cache = false;
    }

    public function getCache()
    {
        return $this->cache;
    }

}
