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

        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) {
            if (array_key_exists($key, $_SERVER) === true) {
                foreach (explode(',', $_SERVER[$key]) as $ip) {
                    // just to be safe
                    $ip = trim($ip);

                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                        $this->address = $ip;
                    } else {
                        $host = 'www.cnn.com';
                        exec("nslookup $host", $result);

                        //this loop will get the last ipaddress but this is what we want
                        foreach ($result as $key => $value) {
                            if (preg_match('/\d+(?:\.\d+)+/', $value, $matches)) {
                                $ip = $matches[0];
                            }
                        }
                        $ip = trim($ip);
                        $this->address = $ip;
                    }
                }
            }
        }

        return false;
    }
}
