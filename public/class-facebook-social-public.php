<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link  www.gulosolutions.com/radboris
 * @since 1.0.0
 *
 * @package    Facebook_Social
 * @subpackage Facebook_Social/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Facebook_Social
 * @subpackage Facebook_Social/public
 * @author     Rad Borislavov <rad@gulosolutions.com>
 */

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model as Model;

class Facebook_Social_Public
{
    /**
     * The ID of this plugin.
     *
     * @since  1.0.0
     * @access private
     * @var    string    $plugin_name    The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since  1.0.0
     * @access private
     * @var    string    $version    The current version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     *
     * @since 1.0.0
     * @param string $plugin_name The name of the plugin.
     * @param string $version     The version of this plugin.
     */
    public function __construct( $plugin_name, $version )
    {

        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->register_shortcodes();

    }

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since 1.0.0
     */
    public function enqueue_styles()
    {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Facebook_Social_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Facebook_Social_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/facebook-social-public.css', array(), $this->version, 'all');

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since 1.0.0
     */
    public function enqueue_scripts()
    {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Facebook_Social_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Facebook_Social_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/facebook-social-public.js', array( 'jquery' ), $this->version, false);
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/survey-social-public.js', $this->version, false);
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/vue-form-wizard.js', $this->version, false);
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/vfg.js', $this->version, false);

        wp_localize_script(
            $this->plugin_name, 'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );
    }

    public function startUp4UserSession()
    {

        if(!session_id()) {
            $sh = new Controllers\Up4Sessions();

            session_set_save_handler($sh, true);

            register_shutdown_function('session_write_close');

            session_start();

            $this->startUp4User();
        }

    }

    public function startUp4User()
    {

        global $up4User;

        $up4User = new Controllers\UsersController();

    }

    public function register_shortcodes()
    {
        add_shortcode($this->plugin_name . '_facebook_login_button', array($this, 'process_button'));
    }

    public function process_button($attrs, $content)
    {

        $content = '<div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>';
        return $content;

    }

    public function fb_receiver()
    {

        $ip = $_SERVER['REMOTE_ADDR'];

        $facebook_id = $_POST['response']['id'];
        $facebook_name = $_POST['response']['name'];

        $names = explode(' ', $facebook_name);

        $facebook_email = isset($POST['response']['email']) ? $POST['response']['email'] : self::emailGenerator();

        $plain_text = wp_generate_password(20);
        $user_pass = wp_hash_password($plain_text);

        $user = new Controllers\FacebookUsers();

        $user->checkUser($facebook_id, $facebook_name, $ip);

        $wp_user = Models\User::where('user_login', $facebook_email)->first();

        if ($wp_user) {

            wp_set_auth_cookie($wp_user->ID);

        } else {

            $wp_user = new Models\User(
                [
                'user_login' => $facebook_email,
                'user_pass' => $user_pass,
                'user_email' => $facebook_email,
                'display_name' => $names[0],
                'user_nicename' => 'testname',
                'user_url' => 'testurl',
                'user_registered' => new DateTime(),
                'user_activation_key' => '12345666677',
                'user_status' => 0
                ]
            );

            //add the WordPress users foreign key
            $wp_user->save();
            $up4_user = Models\Up4User::where('sess', session_id())->first();
            $up4_user->users_id = $wp_user->ID;
        }

        wp_die();

    }

    public function survey_receiver()
    {

        $ip = $_SERVER['REMOTE_ADDR'];
        $user = new Controllers\SurveyUsers();

        wp_die();

    }

    public static function emailGenerator()
    {

        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $username_length = 10;

        $randomName = '';

        for($j=0; $j<$username_length; $j++){
            $randomName .= $characters[rand(0, strlen($characters) -1)];
        }

        $fullAddress = $randomName . '@' . 'example.com';

        return $fullAddress;

    }
}
