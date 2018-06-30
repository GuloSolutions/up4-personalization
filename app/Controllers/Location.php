<?php
namespace Controllers;

use Controllers\IpAddress;
use Controllers\ApiCache;
use GuzzleHttp\Client;

class Location
{
    const BASE_URI = 'http://api.ipstack.com/%s?access_key=%s&output=json&legacy=1';

    /*
     * @var string
     */
    private $api_key;

    /*
     * Cache life
     * 3 days
     */
    const CACHE_EXPIRE = 2592000;

    /*
     * @var string
     */
    private $zip;

    /*
     * @var string
     */
    private $origin;

    /*
     * @var IpAddress
     */
    private $ip;

    /*
     * @var Object
     */
    private $response;

    /*
     * @var Object
     */
    private $apiCache;

    /*
     * @var Object
     */
    private $cacheKey;

    public function __construct()
    {
        $this->apiCache = new ApiCache(self::CACHE_EXPIRE);

        $this->ip = new IpAddress();

        $this->setResponse();
    }

    public function getIp()
    {
        return $this->ip->getAddress();
    }

    public function getZip()
    {
        $this->zip = $this->response->zip_code;

        return $this->zip;
    }

    public function getOrigin()
    {
        $this->origin = sprintf('%s, %s', $this->response->city, $this->response->region_code);

        return $this->origin;
    }

    private function setResponse()
    {
        $ip = $this->ip->getAddress();

        $this->response = $this->apiCache->getCachedItem($ip);

        if (defined('IPSTACK_API_KEY') && $this->response === false) {
            $api_key = IPSTACK_API_KEY;

            $base_uri = sprintf(self::BASE_URI, $ip, $api_key);

            $client = new Client();

            $response = $client->request('GET', $base_uri);

            $this->response = json_decode($response->getBody());

            $this->apiCache->saveItemInCache($this->response);
        }
    }
}
