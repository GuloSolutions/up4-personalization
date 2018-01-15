<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;

class WordpressUsers {

    public function __construct() {}

    public function setupWPUser (Array $data)
    {
        // see if we already have a user
        $user = User::where('user_email', $data['user_email'])
            ->first();

        // add the WordPress users
        if ($user === null) {
            $user = $this->newWPUser($data);
        }

        return $user;
    }

    public function newWPUser (Array $data)
    {

        $plain_text = wp_generate_password(20);
        $user_pass = wp_hash_password($plain_text);

        $user_data = [
                'user_login' => $data['user_email'],
                'user_pass' => $user_pass,
                'user_email' => $data ['user_email'],
                'display_name' => sprintf('%s %s', $data['first_name'], $data['last_name']),
                'user_nicename' => $data['user_nicename'],
                'user_url' => '',
                'user_registered' => Carbon::now(),
                'user_activation_key' => '',
                'user_status' => 0
        ];

        $wp_user = new User($user_data);
        $wp_user->save();

        return $wp_user;
    }
}
