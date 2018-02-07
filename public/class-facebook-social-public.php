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


    private $fbUser;


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
        wp_register_script(
            'facebook-social-public',
            plugin_dir_url(__FILE__) . 'js/facebook-social-public.js',
            array(),
            $this->version,
            false
        );

        if ($this->up4 && $this->up4->isSurveyTaken()) {
            wp_register_script(
                'survey-social-public',
                plugin_dir_url(__FILE__) . 'js/survey-social-public.js',
                array(),
                $this->version,
                true
            );
        } else {
            wp_register_script(
            'facebook-social-public',
              plugin_dir_url(__FILE__) . 'js/facebook-social-public.js',
            array(),
              $this->version,
              false
            );

            wp_register_script(
                'survey-social-public',
                 plugin_dir_url(__FILE__) . 'js/survey-social-public.js',
                array(),
                 $this->version,
                 true
            );
        }
    }


    public function register_helper_scripts()
    {
        wp_register_script(
             'survey-social-public-button',
             plugin_dir_url(__FILE__) . 'js/showSurvey-social-public.js',
             array(),
             $this->version,
             true
         );
    }


    public function register_styles()
    {
        if ($this->up4 && $this->up4->isSurveyTaken()) {
            wp_register_style('facebook-social-public-style', plugin_dir_url(__FILE__) . '/css/facebook-social-public.css');
        } else {
            wp_register_style('survey-social-public-style', plugin_dir_url(__FILE__) . '/css/survey-social-public.css');
            wp_register_style('facebook-social-public-style', plugin_dir_url(__FILE__) . '/css/facebook-social-public.css');
        }
    }

    public function startUp4Session()
    {
        if (!session_id()) {
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

    public function register_survey_button()
    {
        add_shortcode($this->plugin_name . '_survey_button', array($this, 'process_survey_button'));
    }

    public function process_button($attrs, $content)
    {
        wp_enqueue_style('facebook-social-public-style', plugin_dir_url(__FILE__) . '/css/facebook-social-public.css');

        wp_enqueue_script('facebook-social-public', plugin_dir_url(__FILE__) . 'js/facebook-social-public.js', array( 'jquery' ), $this->version, false);

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
        wp_enqueue_style('survey-social-public-style', plugin_dir_url(__FILE__) . '/css/survey-social-public.css');

        wp_enqueue_script('survey-social-public-button', plugin_dir_url(__FILE__) . 'js/showSurvey-social-public.js', array(), $this->version, false);

        wp_enqueue_script(
            'survey-social-public',
            plugin_dir_url(__FILE__) . 'js/survey-social-public.js',
            array(),
            $this->version,
            true
        );

        wp_localize_script(
            'survey-social-public',
            'ajax_receiver',
            [
                'ajax_url' => admin_url('admin-ajax.php')
            ]
        );

        if (!$this->up4->isSurveyTaken()) {
            $content = <<<EOS

            <div id="survey-social-public">

            <div class="container">
                <button id="start-over" v-on:click="restartSurvey">Start over</button>



            <div class="wizard-navigation">

            {{ counter }} / {{ counterMax }}

            </div>

            <form-wizard @on-complete="onComplete"


                @on-change="incrementCounter"

                     color="gray"
                     error-color="#a94442"
                     title=""
                     subtitle=""
                     ref="wizard"
                    >
EOS;

            if (!$this->up4->get()->age) {
                $questions[] = '
            <tab-content
                         icon="ti-user" :before-change="validateAgeTab">
               <vue-form-generator :model="model"
                                   :schema="ageTabSchema"
                                   :options="formOptions"
                                   ref="ageTabForm"
                                        >
               </vue-form-generator>

            </tab-content>';
            }



            if (!$this->up4->get()->gender) {
                $questions[] = '
            <tab-content

                icon="ti-settings" :before-change="validateGenderTab">
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

EOS;

            return $content;
        }

        return;
    }

    public function fb_receiver()
    {
        $response = $_POST['response'];

        $up4_user = new Controllers\Up4Users($this->up4->up4User, $this->up4->up4Session);
        $up4_user->setupFacebookResponse($response);
        $up4_user->checkFBUser();

        wp_die();
    }

    public function process_survey_button($content, $attrs)
    {
        if ($this->up4->isLoggedInFacebook() && $this->up4->isSurveyTaken()) {
            return;
        } else {
            return $content = '<button id="show-survey">Fill out survey</button>';
        }
    }

    public function survey_receiver()
    {
        $response = $_POST['response'];



        error_log(print_r($this->up4->getPrimaryRecommendation(), true));

        $survey_up4_user = new Controllers\Up4Users($this->up4->up4User, $this->up4->up4Session);

        $survey_up4_user->setupSurveyResponse($response);

        $survey_up4_user->checkSurveyUser();

        wp_die();
    }

    public function fb_logout()
    {
        session_destroy();
        wp_logout();
    }

    public function disableAdminBarforUserRole()
    {
        $id = get_current_user_id();
        $user = get_userdata($id);

        if (empty($user->roles) || in_array('user', $user->roles)) {
            show_admin_bar(false);
        }
    }


    public function survey_loader_helper()
    {
        if ($this->up4 && $this->up4->isSurveyTaken()) {
            return;
        } else {
            $this->register_survey_button();

            $this->register_survey_shortcode();
        }
    }

    public function survey_form_receiver()
    {
        return '

        <template>
        <div id="survey-social-public">


        <div class="wizard-navigation">
         {{ resetForm }}
        </div>

            <div class="wizard-navigation-number">

            {{ counter }} / {{ counterMax }}

            </div>

            <form-wizard @on-complete="onComplete"
                @on-change="incrementCounter"
                     color="gray"
                     error-color="#a94442"
                     title=""
                     subtitle=""
                    >

            <tab-content
                         icon="ti-user" :before-change="validateAgeTab">
               <vue-form-generator :model="model"
                                   :schema="ageTabSchema"
                                   :options="formOptions"
                                   ref="ageTabForm"
                                   >
               </vue-form-generator>
            </tab-content>;



            <tab-content

                icon="ti-settings" :before-change="validateGenderTab">
                <vue-form-generator :model="model"
                                   :schema="genderTabSchema"
                                   :options="formOptions"
                                   ref="genderTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;


            <tab-content
                         icon="ti-user" :before-change="validateTravelTab">
                <vue-form-generator :model="model"
                                   :schema="travelTabSchema"
                                   :options="formOptions"
                                   ref="travelTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;


            <tab-content
                         icon="ti-user" :before-change="validateChildrenTab">
                <vue-form-generator :model="model"
                                   :schema="childrenTabSchema"
                                   :options="formOptions"
                                   ref="childrenTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;


            <tab-content
                         icon="ti-user" :before-change="validateExerciseTab">
                <vue-form-generator :model="model"
                                   :schema="exerciseTabSchema"
                                   :options="formOptions"
                                   ref="exerciseTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;

            </form-wizard>
        </div>

        </template>';
    }
}
