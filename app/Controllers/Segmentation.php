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

    /*
     * The segment post object
     */
    private $post_segment;

    public function __construct()
    {
        $this->init();
    }

    /*
     * Gets our passed user segment and sets our cookie
     * otherwise loads user segment from stored cookie
     * @return Void
     */
    public function init()
    {
        if ($this->exists($this->getPassed())) {
            $this->setSessionCookie();
        } elseif ($this->isCookieSet()) {
            $this->exists($this->decode());
        }
    }

    /*
     * Gets our post segment
     * @return WP_POST
     */
    public function getPost()
    {
        return $this->post_segment;
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
    public function getSegmentTemplate()
    {
        global $up4_user, $post;

        if (!$up4_user->isLoggedIn() && $this->isCookieSet()) {
            $post = $this->post_segment;
            setup_postdata($post);

            get_template_part('single-segments');

            wp_reset_postdata();
        }
    }

    /*
     * Checks to see if the user segment post type exists
     * @return Boolean
     */
    public function exists($user_segment)
    {
        global $up4_user;

        if (!$up4_user->isLoggedIn() && $user_segment) {
            // get our custom segment
            $segment_query = new \WP_Query(['title' => $user_segment, 'post_type' => 'segments']);

            if ($segment_query->have_posts()) {
                $this->post_segment = current($segment_query->posts);

                $this->user_segment = $user_segment;

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
