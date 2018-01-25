<?php
namespace Controllers;

use Controllers\IpAddress;
use GuzzleHttp\Client;
use GuzzleHttp\Stream\Stream;
use Controllers\ApiCache;


class Location
{
    const BASE_URI = 'https://freegeoip.net/json/%s';

    const EXPIRATION = 2592000;

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

        $this->apiCache = new ApiCache;

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

        is_null($this->cacheKey) ? $this->cacheKey = $this->apiCache->getRandomKey() : $this->cacheKey;


        if (!$this->apiCache->getCachedItem($this->cacheKey)) {

            $base_uri = sprintf(self::BASE_URI, $this->ip->getAddress());

            $client = new Client();

            $response = $client->request('GET', $base_uri);

            $this->response = json_decode($response->getBody());

            $this->apiCache->saveItemInCache($this->response, self::EXPIRATION);

        } else {

            $this->response = $this->apiCache->getCachedItem($this->cacheKey);
        }
    }
}
