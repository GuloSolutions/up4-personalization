<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link    www.gulosolutions.com
 * @since   1.0.0
 * @package Facebook_Social
 *
 * @wordpress-plugin
 * Plugin Name:       up4-personalization
 * Plugin URI:        www.gulosolutions.com
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.13
 * Author:            Gulo Solutions
 * Author URI:        www.gulosolutions.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       facebook-social
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

/**
 * Currently pligin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('PLUGIN_NAME_VERSION', '1.0.13');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-facebook-social-activator.php
 */
function activate_facebook_social()
{
    include_once plugin_dir_path(__FILE__) . 'includes/class-facebook-social-activator.php';
    Facebook_Social_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-facebook-social-deactivator.php
 */
function deactivate_facebook_social()
{
    include_once plugin_dir_path(__FILE__) . 'includes/class-facebook-social-deactivator.php';
    Facebook_Social_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_facebook_social');
register_deactivation_hook(__FILE__, 'deactivate_facebook_social');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-facebook-social.php';
require plugin_dir_path(__FILE__) . 'includes/class-database.php';
require plugin_dir_path(__FILE__) . 'public/class-facebook-social-public.php';

/**
 * The core app autoloader
 */
if (is_file(plugin_dir_path(__FILE__) . 'vendor/autoload.php')) {
    require plugin_dir_path(__FILE__) . 'vendor/autoload.php';
} elseif (is_file(dirname(__FILE__, 4) . '/vendor/autoload.php')) {
    require dirname(__FILE__, 4) . '/vendor/autoload.php';
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
function run_facebook_social()
{
    $database = new Database();

    $plugin = new Facebook_Social();
    $plugin->run();
}

run_facebook_social();
