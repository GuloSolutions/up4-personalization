<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;

class WordpressUsers {

    public function __construct() {}

    public function setupWPUser (Up4Users $user)
    {
        // see if we already have a user
        $user = User::where('user_email', $user->email)
            ->first();

        // add the WordPress users
        if ($user === null) {
            $this->newWPUser($user);
        }
    }

    public function newWPUser (Up4Users $user)
    {

        $plain_text = wp_generate_password(20);
        $user_pass = wp_hash_password($plain_text);

        $user_data = [
                'user_login' => $user->email,
                'user_pass' => $user_pass,
                'user_email' => $user->email,
                'display_name' => sprintf('%s %s', $user->first_name, $user->last_name),
                'user_nicename' => $user->nice_name,
                'user_url' => '',
                'user_registered' => Carbon::now(),
                'user_activation_key' => '',
                'user_status' => 0
        ];

        $this->user = new User($user_data);
        $this->user->save();
    }
}
