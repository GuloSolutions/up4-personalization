# up4-personalization

- How to Manage Migrations:
  - Navigate inside the up4-personalization in the plugins directory. From there run
    - php vendor/bin/phinx migrate -e development

- API access for geolocation and weather does not need to be configured.
-   Saved to db table when user starts session. Use methods below in section 6 to retrieve information
- In the main index.php file of the theme you can get access to the user object (WordPress and Up4User) with
the following commands.

- For Up4User:
  - Utility methods for accessing specific fields

```
    $facebook_social_user->get());

    $facebook_social_user->getName());

    $facebook_social_user->getId());

    $facebook_social_user->getFacebookId());

    $facebook_social_user->getWeather());

    $facebook_social_user->getZip());

    $facebook_social_user->getLocalTime());
```

- For FB login use shortcode

```
    echo do_shortcode('[facebook-social_facebook_login_button]');
```

- For the logged in WordPress user (if one exists, i.e. we have Facebook email)
  - var_dump(wp_get_current_user());
