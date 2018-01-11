<?php
namespace Controllers;

use Controllers\Location;
use GuzzleHttp\Client;
use GuzzleHttp\Stream\Stream;

class Weather
{
    const BASE_URI = 'http://api.wunderground.com/api/c816c11b8d0fb0e6/geolookup/conditions/q/%s.json';

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
    public $location;

    public function __construct(Location $location)
    {
        $this->location = $location;

        $this->setResponse();

        $this->setProperties();
    }

    public function getTemperature()
    {
        return $this->temperature;
    }

    public function getOrigin()
    {
        return $this->origin;
    }

    public function getConditions()
    {
        return $this->conditions;
    }

    private function setResponse()
    {
        $base_uri = sprintf(self::BASE_URI, $this->location->getZip());

        $client = new Client();

        $response = $client->request('GET', $base_uri);

        $this->response = json_decode($response->getBody());
    }

    private function setProperties()
    {
        $this->temperature = $this->response->{'current_observation'}->{'temp_f'};

        $this->origin = $this->response->{'current_observation'}->{'display_location'}->{'full'};

        $this->conditions =  $this->response->{'current_observation'}->{'weather'};
    }
}
