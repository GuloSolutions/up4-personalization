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
    // checks if fb user is logged in
    $facebook_social_user->isLoggedIn());

    // gets up4User object
    $facebook_social_user->get());

    // gets up4User id
    $facebook_social_user->getId());

    // gets facebook id
    $facebook_social_user->getFacebookId());

    // gets first name
    $facebook_social_user->getName());

    // gets weather conditions
    $facebook_social_user->getConditions());

    // gets temp
    $facebook_social_user->getWeather());

    // gets zip
    $facebook_social_user->getZip());

    // get user's origin i.e. Chicago, IL
    $facebook_social_user->getOrigin());

    // get user's fb profile url
    $facebook_social_user->getProfilePictureUrl());
```

- For FB login use shortcode

```
    echo do_shortcode('[facebook-social_facebook_login_button]');
```

- For Survey use shortcode

```
    echo do_shortcode('[facebook-social_survey_form]');
```
- To compile the Vue files use: 

```
npm run build
```

  
  



