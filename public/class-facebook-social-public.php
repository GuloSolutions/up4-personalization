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

    /*
     * @var Controllers\Up4
     */
    private $up4;

    /**
     * Initialize the class and set its properties.
     *
     * @since 1.0.0
     * @param string $plugin_name The name of the plugin.
     * @param string $version     The version of this plugin.
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->register_facebook_shortcode();
        $this->survey_loader_helper();
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
        if (WP_DEBUG) {
            $facebook_social_public = plugin_dir_url(__FILE__) . 'js/facebook-social-public.src.js';

            $survey_social_public = plugin_dir_url(__FILE__) . 'js/survey-social-public.js';
        } else {
            //$facebook_social_public = plugin_dir_url(__FILE__) . 'js/facebook-social-public.min.js';

            $survey_social_public = plugin_dir_url(__FILE__) . 'js/survey-social-public.min.js';
        }

        if ($facebook_social_public) {

            wp_register_script(
                'facebook-social-public',
                $facebook_social_public,
                array('jquery'),
                $this->version,
                false
            );
        }

        wp_register_script(
            'survey-social-public',
            $survey_social_public,
            array(),
            $this->version,
            true
        );
    }

    public function register_styles()
    {
        wp_register_style('facebook-social-public-style', plugin_dir_url(__FILE__) . 'css/facebook-social-public.css');
    }

    public function startUp4Session()
    {
        $session_id = session_id();

        if (!$session_id) {
            $sh = new Controllers\Up4Sessions();

            session_set_save_handler($sh, true);

            register_shutdown_function('session_write_close');

            session_start();

            $session_id = session_id();
        }

        if ($session_id) {
            $this->up4 = new Controllers\Up4($session_id);

            $this->up4->init();
        }
    }

    public function startUp4User()
    {
        global $up4_user;

        $up4_user = $this->up4;
    }

    public function startSegmentationUser()
    {
        global $segmented_user;

        $segmented_user = new Controllers\Segmentation;
    }

    public function register_facebook_shortcode()
    {
        add_shortcode($this->plugin_name . '_facebook_login_button', array($this, 'process_button'));
    }

    public function register_survey_shortcode()
    {
        add_shortcode($this->plugin_name . '_survey_form', array($this, 'process_survey'));
    }

    public function register_survey_button()
    {
        add_shortcode($this->plugin_name . '_survey_button', array($this, 'process_survey_button'));
    }

    public function register_survey_hide_button()
    {
        add_shortcode($this->plugin_name . '_survey_hide_button', array($this, 'process_survey_hide_button'));
    }

    public function register_survey_start_over_button()
    {
        add_shortcode($this->plugin_name . '_survey_start_over_button', array($this, 'process_survey_start_over_button'));
    }

    public function process_button($attrs, $content)
    {
        wp_enqueue_style('facebook-social-public-style');

        wp_enqueue_script('facebook-social-public');

        wp_localize_script(
            'facebook-social-public',
            'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );

        if ($this->up4->isLoggedInFacebook()) {
            $content = '<button id="fb-logout">Sign out</button>';
        } else {
            $content = '<button id="fb-login">Sign in with Facebook</button>';
        }

        return $content;
    }

    public function process_survey($attrs, $content)
    {
        if (WP_DEBUG) {
            wp_enqueue_style('survey-social-public-style', plugin_dir_url(__FILE__) . 'css/survey-social-public.css');
        }

        wp_enqueue_script('survey-social-public');

        wp_localize_script(
            'survey-social-public',
            'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );

        $content = <<<EOS
            <div id="survey-social-public">

            <button id="start-over" v-on:click="restartSurvey">Start over</button>
            <button id="hide-survey" v-on:click="hideSurveyDiv">Cancel</button>

            <div class="container">

            <form-wizard @on-complete="onComplete"
                    @on-change="incrementCounter"
                     color="gray"
                     error-color="#a94442"
                     title=""
                     subtitle=""
                     ref="wizard">
            <div class="wizard-numbers">
                {{ counter }} / {{ counterMax }}
            </div>
EOS;

        if (!$this->up4->get()->age) {
            $questions[] = '
            <tab-content icon="ti-user" :before-change="validateAgeTab">
               <label for="radio"  class="control control--checkbox">How old are you?</label>
               <vue-form-generator
                    :model="model"
                    :schema="ageTabSchema"
                    :options="formOptions"
                    ref="ageTabForm">
               </vue-form-generator>
            </tab-content>';
        }

        if (!$this->up4->get()->gender) {
            $questions[] = '
            <tab-content icon="ti-user" :before-change="validateGenderTab">
                <label for="radio" class="control control--checkbox">To which gender do you most identify?</label>
                <vue-form-generator :model="model"
                                   :schema="genderTabSchema"
                                   :options="formOptions"
                                   ref="genderTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';
        }

        $questions[] = '
            <tab-content
                         icon="ti-user" :before-change="validateTravelTab">
                <label for="radio"  class="control control--checkbox">You are best described as a...</label>

                <vue-form-generator :model="model"
                                   :schema="travelTabSchema"
                                   :options="formOptions"
                                   ref="travelTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';

        $questions[] = '
            <tab-content
                         icon="ti-user" :before-change="validateChildrenTab">
                        <label for="radio">Do you have children?</label>
                <vue-form-generator :model="model"
                                   :schema="childrenTabSchema"
                                   :options="formOptions"
                                   ref="childrenTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';

        $questions[] = '
            <tab-content
                         icon="ti-user" :before-change="validateExerciseTab">
                         <label for="radio">How would you describe your workouts?</label>
                <vue-form-generator :model="model"
                                   :schema="exerciseTabSchema"
                                   :options="formOptions"
                                   ref="exerciseTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';

        $questions[] = '
            <tab-content
                         icon="ti-user" :before-change="validateHealthTab">
                         <label for="checkbox" >Which health needs are most important to you?</label>
                <vue-form-generator :model="model"
                                   :schema="healthTabSchema"
                                   :options="formOptions"
                                   ref="healthTabForm"
                                   >
                </vue-form-generator>

            </tab-content>';

        foreach ($questions as $question) {
            $content .= $question;
        }

        $content .= <<<EOS

            </form-wizard>
            </div>
            </div>
        </div>

EOS;

        return $content;
    }

    public function fb_receiver()
    {
        $response = $_POST['response'];

        $up4_user = new Controllers\Up4Users($this->up4->up4User, $this->up4->up4Session);
        $up4_user->setupFacebookResponse($response);
        $up4_user->checkFBUser();

        wp_die();
    }

    public function fb_logout()
    {
        $up4Sessions = new Controllers\Up4Sessions();
        $up4Sessions->destroy($this->up4->up4Session->sid);

        wp_logout();

        wp_die();
    }

    public function process_survey_button($content, $attrs)
    {
        if ($this->up4->isLoggedInFacebook() && $this->up4->isSurveyTaken()) {
            return;
        } else {
            return $content = '<button id="show-survey">Take the Quiz</button>';
        }
    }

    public function process_start_over_button($content, $attrs)
    {
        return $content = '<button id="show-survey-again">Start over</button>';
    }

    public function survey_receiver()
    {
        $response = $_POST['response'];

        $survey_up4_user = new Controllers\Up4Users($this->up4->up4User, $this->up4->up4Session);
        $survey_up4_user->setupSurveyResponse($response);
        $survey_up4_user->checkSurveyUser();

        wp_die();
    }

    public function disableAdminBarforUserRole()
    {
        $id = get_current_user_id();
        $user = get_userdata($id);

        if (empty($user->roles) || in_array('user', $user->roles)) {
            show_admin_bar(false);
        }
    }

    public function blockusers_init()
    {
        global $up4_user;

        $id = get_current_user_id();
        $user = get_userdata($id);

        /* it's an AJAX call don't do anything else */
        if (defined('DOING_AJAX') && DOING_AJAX) {
            return;
        }

        /*
         * is_admin() will return false when trying to access wp-login.php.
         * is_admin() will return true when trying to make an ajax request
         *      (both front-end and back-end requests)
         * is_admin() will return true for calls to load-scripts.php and load-styles.php.
         * is_admin() is not intended to be used for security checks.
         */
        if (is_admin() && $up4_user->isLoggedInFacebook() &&
            (empty($user->roles) || in_array('user', $user->roles))) {
            wp_redirect(home_url());
            exit;
        }
    }

    public function survey_loader_helper()
    {
        $this->register_survey_button();
        $this->register_survey_shortcode();
    }
}
