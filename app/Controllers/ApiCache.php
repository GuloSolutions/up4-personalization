<?php
namespace Controllers;

use Stash;

class ApiCache
{
    /*
     * 1 hour expiry
     */
    const CACHE_EXPIRE = 3600;

    /*
     * @param Stash\Pool
     */
    private $pool;

    /*
     * @param Boolean
     */
    private $cache;

    /*
     * @param Stash\Item
     */
    private $item;

    /*
     * Seconds for expiration
     * @param Integer
     */
    private $expiration;

    /*
     * @param Integer
     */
    public function __construct(int $expiration = null)
    {
        $driver = new Stash\Driver\FileSystem(array());
        $this->pool = new Stash\Pool($driver);

        $this->expiration = is_int($expiration) ? $expiration : self::CACHE_EXPIRE;

        $this->setCache(false);
    }

    /*
     * @return Mixed - false no cache fail, data otherwise
     */
    public function getCachedItem($cachedItem)
    {
        if (is_null($cachedItem) || $this->getCache() === false) {
            return false;
        }

        if ($this->getCache() === true) {
            $this->item = $this->pool->getItem($cachedItem);
            $data = $this->item->get();

            if ($this->item->isMiss()) {
                return false;
            }
        }

        return $data;
    }

    public function saveItemInCache($data)
    {
        if ($this->getCache() === true) {
            if ($this->item instanceof \Stash\Item && $this->item->isMiss()) {
                $this->setExpiration();
                $this->pool->save($this->item->set($data));
            }
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

    public function setExpiration()
    {
        $this->item->expiresAfter($this->expiration);
    }

    /*
     * delete entire cache
     * @return void
     */
    public function deleteAllCache()
    {
        $this->pool->clear();
    }
}
