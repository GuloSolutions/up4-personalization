<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\FacebookUser;

class SurveyUsers
{
    public function __construct()
    {
    }

    // public function checkUser($facebook_id)
    // {
    //     $survey_user = FacebookUser::where('ye3a_id', $facebook_id)->first();

    //     if (!is_null($fb_user)) {
    //         //we iterate over the array received from the ajax call and assign values
    //         $survey_user->digestiveHealth = 1;
    //         $survey_user->cookie = $sess_id;
    //         $survey_user->save();
    //         //else we create a new Facebook user
    //     } else {
    //         $new_susrvey_user = new FacebookUser();
    //         $new_survey_user->cookie = session_id();
    //         $new_survey_user->age = 53;
    //         $new_survey_user->save();
    //     }
    // }

    public function getLocation($ip)
    {
        $user_ip = $ip;
        $location = json_decode(file_get_contents('https://freegeoip.net/json/' . $user_ip));
        return $location->zip_code;
    }

    public function getWeather($location)
    {
        $json_string = file_get_contents("http://api.wunderground.com/api/c816c11b8d0fb0e6/geolookup/conditions/q/$location.json");

        $parsed_json = json_decode($json_string);
        $temp_f = $parsed_json->{'current_observation'}->{'temp_f'};
        $full_location = $parsed_json->{'current_observation'}->{'display_location'}->{'full'};
        $local_time_raw = $parsed_json->{'current_observation'}->{'local_time_rfc822'};
        $lt = substr($local_time_raw, -14, 5);
        $local_weather =  $parsed_json->{'current_observation'}->{'weather'};

        return [$temp_f, $full_location, $lt, $local_weather];
    }
}
