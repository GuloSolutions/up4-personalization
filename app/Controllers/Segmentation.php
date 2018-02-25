<?php
namespace Controllers;

class Segmentation
{
    /*
     * @var string
     */
    private $user_cookie;

    /*
     * @var Object
     */
    private $user_segment;


    public function __construct()
    {
        $this->init();
    }

    public function init()
    {
        if (!isset($_COOKIE['segmentation'])) {
            $value = $this->generateCookieValue();
            setcookie("segmentation", $value, time() + (3 * 86400), COOKIEPATH, COOKIE_DOMAIN);
            $this->user_cookie = $value;
        } else {
            $this->user_cookie = $_COOKIE['segmentation'];
        }
    }

    /*
     * @return boolean
     */
    public function isCookieSet()
    {
        return isset($this->user_cookie) ? true : false;
    }

    /*
     * @return string
     */
    private function generateCookieValue()
    {
        $cookie_string = substr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", mt_rand(0, 51), 1) . substr(md5(time()), 1);
        return base64_encode($cookie_string);
    }

    /*
     * @return Object
     */
    public function segmentedUserTemplate()
    {
        // global $up4_user;

        if (!$up4_user->isLoggedIn() && $this->isCookieSet()) {
            return $this->user_segment;
        }
    }

    /*
     * @return Object
     */
    public function isSegment()
    {
        global $up4_user;
        global $wp_query;

        // if (!$up4_user->isLoggedIn() && array_key_exists('utm_content', $_GET)) {
        //     $segments = explode('_', $_GET['utm_content']);

        //     $segment = strtolower($segments[0]);

        $segment = strtolower('Ultra');

        // get our custom segment
        $wp_query_clone = clone $wp_query;
        $wp_query = new \WP_Query(['title' => $segment, 'post_type' => 'segments']);

        if ($wp_query->have_posts() && $this->isCookieSet()) {
            setup_postdata($wp_query->the_post());

            if (!empty(get_template_part('single-segments'))) {
                $this->user_segment = get_template_part('single-segments');
                return true;
            } else {
                return false;
            }
        }
    }
}
//}
