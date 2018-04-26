(function($) {
    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function() {
        var up4_fb_data = {};

        var up4_fb_scope = 'id, name, email, first_name, last_name, gender, birthday, picture.width(800).height(800)';

        FB.init({
            appId      : '1350071051786117',
            cookie     : true,
            xfbml      : true,
            autoLogAppEvents: true,
            status     : true,
            version    : 'v2.12'
        });

        FB.Event.subscribe('auth.statusChange', function(response) {
            if (response.status === 'connected') {
                return;
            } else if (response.status === 'not_authorized') {
                return;
            } else {
                return;
            }
        });

        FB.Event.subscribe('auth.logout', function(response) {
            up4Logout();
        });

        var up4Logout = function() {
            up4_fb_data = {
                'action': 'fb_logout',
                'trigger': true,
                'response': {
                    id: 1
                }
            };

            sendToApp();
        };

        var facebookLogout = function() {
            FB.getLoginStatus(function(response) {
                if (response && response.status === 'connected') {
                    FB.logout(function(response) {});
                } else {
                    up4Logout();
                }
            });
        };

        var facebookLogin = function() {
            FB.login(function(response) {
                if (response.status === 'connected') {
                    connectToApp(true);
                }

                return;
            }, {scope: 'email, user_birthday',
                return_scopes: true,
                auth_type: 'rerequest'
                });
        };

        var connectToApp = function(redirect) {
            FB.api('/me',
                {fields: up4_fb_scope},
                function(response) {
                    up4_fb_data = {
                        'action': 'fb_receiver',
                        'trigger': redirect,
                        'response': response
                    };
                    sendToApp();
                }
            );
        };

        var sendToApp = function() {
            jQuery.ajax({
                url: ajax_receiver.ajax_url,
                data: up4_fb_data,
                method: 'POST',
                success: function(data) {
                    if(up4_fb_data.trigger != 'undefined' && up4_fb_data.trigger === true) {
                        window.top.location = window.location.href;
                    }
                }
            });
        };

        $('#fb-login').on('click', function(e) {
            e.preventDefault();

            facebookLogin();
        });

        $('#fb-logout').on('click', function(e) {
            e.preventDefault();

            facebookLogout();
        });
    });
}) (jQuery);
