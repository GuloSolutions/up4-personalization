<?php
namespace Controllers;

class Segmentation
{
    /*
     * Segmentation key
     */
    const SEGMENT_KEY = 'utm_content';

    /*
     * 1 week cookie expiry
     */
    const COOKIE_EXPIRE = 604800;

    /*
     * 1 week cookie expiry
     */
    const COOKIE_KEY = 'up4_segmentation';

    /*
     * The segment passed to our app
     * i.e. Adult, Kids, Ultra, etc
     * @var String
     */
    private $user_segment;

    public function __construct()
    {
        $this->init();
    }

    /*
     * Gets our user segment and sets the cookie
     * @return Void
     */
    public function init()
    {
        $this->user_segment = $this->getPassed();

        // if a segment is ever passed, we want to reset our cookie
        if ($this->user_segment) {
            $this->setSessionCookie();
        } elseif ($this->isCookieSet()) {
            $this->user_segment = $this->decode();
        }
    }

    /*
     * Gets our user segment
     * @return String
     */
    public function getSegment()
    {
        if ($this->isCookieSet()) {
            return $this->user_segment;
        }
    }

    /*
     * Checks to see if cookie is set
     * @return boolean
     */
    private function isCookieSet()
    {
        return isset($_COOKIE[self::COOKIE_KEY]) ? true : false;
    }

    /*
     * Set cookie and session global
     * so we don't have the read delay
     * @return void
     */
    private function setSessionCookie()
    {
        $_COOKIE[self::COOKIE_KEY] = $this->encode();

        setcookie(self::COOKIE_KEY, $_COOKIE[self::COOKIE_KEY], time() + self::COOKIE_EXPIRE, COOKIEPATH, COOKIE_DOMAIN);
    }

    /*
     * Gets our stored cookie
     * @return String
     */
    private function getCookie()
    {
        if ($this->isCookieSet()) {
            return $_COOKIE[self::COOKIE_KEY];
        }

        return;
    }

    /*
     * @return string
     */
    private function encode()
    {
        if ($this->user_segment) {
            return base64_encode($this->user_segment);
        }

        return null;
    }

    /*
     * @return string
     */
    private function decode()
    {
        if ($cookie_string = $this->getCookie()) {
            return base64_decode($cookie_string, true);
        }

        return null;
    }

    /*
     * Outputs the Single Segment Template
     * @return Void
     */
    public function getSegementTemplate()
    {
        global $up4_user;

        if (!$up4_user->isLoggedIn() && $this->isCookieSet()) {
            get_template_part('single-segments');
        }
    }

    /*
     * Checks to see if the user segment post type exists
     * @return Boolean
     */
    public function exists()
    {
        global $up4_user;
        global $wp_query;

        if (!$up4_user->isLoggedIn() && $this->user_segment) {
            // get our custom segment
            $wp_query = new \WP_Query(['title' => $this->user_segment, 'post_type' => 'segments']);

            if ($wp_query->have_posts()) {
                setup_postdata($wp_query->the_post());

                return true;
            }
        }

        return false;
    }

    /*
     * Checks query params and gets our segment
     * @return String
     */
    private function getPassed()
    {
        if (array_key_exists(self::SEGMENT_KEY, $_GET)) {
            $segments = explode('_', $_GET[self::SEGMENT_KEY]);

            return strtolower($segments[0]);
        }

        return null;
    }
}
