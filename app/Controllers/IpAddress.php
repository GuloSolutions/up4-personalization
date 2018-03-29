<?php
namespace Controllers;

class IpAddress
{
    private $address;

    public function __construct()
    {
        $this->setAddress();
    }

    /*
     * Returns the ip address
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    private function setAddress()
    {
        $ping_response = [];

        $response_headers = [
            'HTTP_CLIENT_IP',
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_FORWARDED',
            'HTTP_X_CLUSTER_CLIENT_IP',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',
            'REMOTE_ADDR'
        ];

        foreach ($response_headers as $key) {
            if (array_key_exists($key, $_SERVER) === true) {
                foreach (explode(',', $_SERVER[$key]) as $ip) {
                    // just to be safe
                    $ip = trim($ip);

                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                        $this->address = $ip;
                    }
                }
            }
        }

        if (!$this->address) {
            $this->address = $this->getFixedAddress();
        }

        return false;
    }

    private function getFixedAddress()
    {
        $ip = gethostbyname('www.cnn.com');

        return $ip;
    }
}
