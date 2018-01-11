<?php
namespace Controllers;

use Controllers\IpAddress;
use GuzzleHttp\Client;
use GuzzleHttp\Stream\Stream;

class Location
{
    const BASE_URI = 'https://freegeoip.net/json/%s';

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

    public function __construct()
    {
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
        $base_uri = sprintf(self::BASE_URI, $this->ip->getAddress());

        $client = new Client();

        $response = $client->request('GET', $base_uri);

        $this->response = json_decode($response->getBody());
    }
}
