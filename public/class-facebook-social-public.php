<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link  www.gulosolutions.com
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
 * @author     Gulo Solutions <info@gulosolutions.com>
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


    private $up4;

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
        $this->register_facebook_shortcode();
        $this->register_survey_shortcode();

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

        //wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/survey-social-public.css', array(), $this->version, 'all');

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

    }

    public function register_scripts()
    {

        wp_register_script( 'facebook-social-public', plugin_dir_url(__FILE__) . 'js/facebook-social-public.js',
            array(), $this->version, false );

        wp_register_script( 'survey-social-public', plugin_dir_url(__FILE__) . 'js/survey-social-public.js',
            array(), $this->version, true );

    }


    public function register_survey_style()
    {
        wp_register_style( 'survey-social-public-style', plugin_dir_url(__FILE__) . '/css/survey-social-public.css' ) ;
    }

    public function startUp4Session()
    {

        if(!session_id()) {
            $sh = new Controllers\Up4Sessions();

            session_set_save_handler($sh, true);

            register_shutdown_function('session_write_close');

            session_start();

            $session_id = session_id();

            $this->up4 = new Controllers\Up4($session_id);

            $this->up4->init();
        }

    }

    public function startUp4User()
    {
        global $up4_user;

        $up4_user = $this->up4;
    }

    public function register_facebook_shortcode()
    {
        add_shortcode($this->plugin_name . '_facebook_login_button', array($this, 'process_button'));

    }

    public function register_survey_shortcode()
    {
        add_shortcode($this->plugin_name . '_survey_form', array($this, 'process_survey'));
    }

    public function process_button($attrs, $content)
    {

        wp_enqueue_script( 'facebook-social-public', plugin_dir_url(__FILE__) . 'js/facebook-social-public.js', array( 'jquery' ), $this->version, false );

        wp_localize_script(
            'facebook-social-public', 'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );

        if($this->up4->isLoggedIn()) {
            $content = '<button id="fb-logout">Sign Out</button>';
        } else {
            $content = '<button id="fb-login">Sign In</button>';
        }

        return $content;

    }

    public function process_survey($attrs, $content)
    {

        wp_enqueue_style( 'survey-social-public-style', plugin_dir_url(__FILE__) . '/css/survey-social-public.css' );

        wp_enqueue_script( 'survey-social-public', plugin_dir_url(__FILE__) . 'js/survey-social-public.js',
            array(), $this->version, true );

        wp_localize_script(
            'survey-social-public', 'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );

        $content = <<<EOS
<div id="app">
        <form-wizard @on-complete="onComplete"
                     color="gray"
                     error-color="#a94442"
                     >
            <tab-content title="How old are you?"
                         icon="ti-user" :before-change="validateFirstTab">
               <vue-form-generator :model="model"
                                   :schema="firstTabSchema"
                                   :options="formOptions"
                                   ref="firstTabForm"
                                   >

               </vue-form-generator>
            </tab-content>
            <tab-content title="Are you a woman?"
                         icon="ti-settings" :before-change="validateSecondTab">
             <vue-form-generator :model="model"
                                   :schema="secondTabSchema"
                                   :options="formOptions"
                                   ref="secondTabForm"
                                   >
               </vue-form-generator>

            </tab-content>
            <tab-content title="Do you travel often?"
                         icon="ti-user" :before-change="validateThirdTab">
               <vue-form-generator :model="model"
                                   :schema="thirdTabSchema"
                                   :options="formOptions"
                                   ref="thirdTabForm"
                                   >

               </vue-form-generator>
            </tab-content>
            <tab-content title="Do you have children?"
                         icon="ti-user" :before-change="validateFourthTab">
               <vue-form-generator :model="model"
                                   :schema="fourthTabSchema"
                                   :options="formOptions"
                                   ref="fourthTabForm"
                                   >

               </vue-form-generator>
            </tab-content>
             <tab-content title="Do you exercise often?"
                         icon="ti-user" :before-change="validateFifthTab">
               <vue-form-generator :model="model"
                                   :schema="fifthTabSchema"
                                   :options="formOptions"
                                   ref="fifthTabForm"
                                   >

               </vue-form-generator>
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              <h4>Your json is ready!</h4>
              <div class="panel-body">
                <pre v-if="model" v-html="prettyJSON(model)"></pre>
              </div>
            </tab-content>
        </form-wizard>
 </div>
EOS;

        return $content;

    }

    public function fb_receiver()
    {

        $response = $_POST['response'];

        $up4_user = new Controllers\Up4Users($this->up4->up4User, $this->up4->up4Session);
        $up4_user->setupFacebookResponse($response);
        $up4_user->checkUser();

        wp_die();

    }

    public function survey_receiver()
    {

        $ip = $_SERVER['REMOTE_ADDR'];
        $user = new Controllers\SurveyUsers();

        wp_die();

    }

    public function fb_logout()
    {

        session_destroy();
        wp_logout();

    }
}
