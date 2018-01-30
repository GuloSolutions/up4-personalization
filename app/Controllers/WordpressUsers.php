<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;
use Carbon\Carbon;

class WordpressUsers
{
    private $data;

    public function __construct($name = null, $email = null)
    {
        $this->email = !empty($email) ? $email : $this->emailGenerator();

        $nice_name = !empty($name) ? $name : $this->email;
        $this->nice_name = preg_replace('/\s/', '-', $nice_name);

        $this->setData();
    }

    private function setData()
    {
        $plain_text = wp_generate_password(20);
        $user_pass = wp_hash_password($plain_text);

        $names = explode('-', $this->nice_name);

        $this->data = [
            'user_login' => $this->email,
            'user_pass' => $user_pass,
            'user_email' => $this->email,
            'display_name' => sprintf('%s %s', $names[0], $names[1]),
            'user_nicename' => $this->nice_name,
            'user_url' => '',
            'user_registered' => Carbon::now(),
            'user_activation_key' => '',
            'user_status' => 0
        ];
    }

    public function setup()
    {
        // see if we already have a user
        $user = User::where('user_email', $this->email)
            ->first();

        // add the WordPress users
        if ($user === null) {
            $user = $this->create();
        }

        return $user;
    }

    public function create()
    {
        $user = new User($this->data);
        $user->save();

        return $user;
    }

    public static function emailGenerator()
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $username_length = 10;

        $randomName = '';

        for ($j=0; $j<$username_length; $j++) {
            $randomName .= $characters[rand(0, strlen($characters) -1)];
        }

        $fullAddress = $randomName . '@' . 'example.com';

        return $fullAddress;
    }
}
