<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\Up4User;
use Models\Up4Session;
use GuzzleHttp\Client;
use GuzzleHttp\Stream\Stream;

class FacebookUsers
{
    public function __construct()
    {
    }

    public function checkUser($facebook_id, $facebook_name)
    {
        $names = explode(' ', $facebook_name);

        $sess = Up4Session::where('sid', session_id())
            ->first();

        $fb_user = Up4User::where('sessions_id', $sess->id)
            ->first();

        $fb_user->facebook_id = $facebook_id;
        $fb_user->first_name = $names[0];
        $fb_user->last_name = $names[1];
        $fb_user->zip = $this->getLocation($ip);

        $fb_user->save();
    }

    public function getLocation($ip)
    {
        $base_uri = 'https://freegeoip.net/json/' . $ip;

        $client = new Client();

        $response = $client->request('GET', $base_uri);

        $result = json_decode($response->getBody());

        return $result->zip_code;
    }

    public function getWeather($location)
    {
        $base_uri = 'http://api.wunderground.com/api/c816c11b8d0fb0e6/geolookup/conditions/q/' . $location . '.json';

        $client = new Client();

        $response = $client->request('GET', $base_uri);

        $parsed_json = json_decode($response->getBody());
        $temp_f = $parsed_json->{'current_observation'}->{'temp_f'};
        $full_location = $parsed_json->{'current_observation'}->{'display_location'}->{'full'};
        $local_time_raw = $parsed_json->{'current_observation'}->{'local_time_rfc822'};
        $lt = substr($local_time_raw, -14, 5);
        $local_weather =  $parsed_json->{'current_observation'}->{'weather'};

        return [$temp_f, $full_location, $lt, $local_weather];
    }
}
