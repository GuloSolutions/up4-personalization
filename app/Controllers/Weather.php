<?php
namespace Controllers;

use Controllers\Location;
use Controllers\ApiCache;
use GuzzleHttp\Client;
use GuzzleHttp\Stream\Stream;

class Weather
{
    const BASE_URI = 'http://api.wunderground.com/api/c816c11b8d0fb0e6/geolookup/conditions/q/%s.json';

    /*
     * Cache life
     * 3 hours
     */
    const CACHE_EXPIRE = 10800;

    private $response;

    /*
     * @var string
     */
    private $temperature;

    /*
     * Location
     * @var string
     */
    private $origin;

    /*
     * @var string
     */
    private $conditions;

    /*
     * @var Location
     */
    private $location;

    /*
     * @var string
     */
    private $localTime;

    /*
     * @var ApiCache
     */
    private $apiCache;


    public function __construct(Location $location)
    {
        $this->location = $location;

        $this->apiCache = new ApiCache(self::CACHE_EXPIRE);

        $this->setResponse();

        $this->setProperties();
    }

    public function getTemperature()
    {
        return round($this->temperature);
    }

    public function getOrigin()
    {
        return $this->origin;
    }

    public function getConditions()
    {
        return $this->conditions;
    }

    public function getLocalTime()
    {
        return $this->localTime;
    }

    private function setResponse()
    {
        $zip = $this->location->getZip();

        $this->response = $this->apiCache->getCachedItem($zip);

        if ($this->response === false) {
            $base_uri = sprintf(self::BASE_URI, $zip);

            $client = new Client();

            $response = $client->request('GET', $base_uri);

            $this->response = json_decode($response->getBody());

            $this->apiCache->saveItemInCache($this->response);
        }
    }

    private function setProperties()
    {
        $this->temperature = $this->response->{'current_observation'}->{'temp_f'};

        $this->origin = $this->response->{'current_observation'}->{'display_location'}->{'full'};

        $this->conditions =  $this->response->{'current_observation'}->{'weather'};

        $this->localTime =  $this->response->{'current_observation'}->{'local_tz_long'};
    }
}
