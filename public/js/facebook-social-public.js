'use strict';

var up4_fb_data = {};

var up4_fb_scope = 'id, name, email, first_name, last_name, gender, birthday, picture.width(800).height(800)';

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1350071051786117',
        cookie     : true,
        xfbml      : true,
        autoLogAppEvents: true,
        status     : true,
        version    : 'v2.11'
    });

    FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.status === 'connected') {
            connectToApp();
        } else if (response.status === 'not_authorized') {

        } else {
          return;
        }
    });

    FB.Event.subscribe('auth.logout', function(response) {
        up4_fb_data = {
            'action': 'fb_logout',
            'trigger': true
        };

        sendToApp();
    });
};

function facebookLogout() {
   FB.logout(function(response) {
        return;
   });
}

function facebookLogin() {
    FB.login(function(response) {
        up4_fb_data.trigger = true;

        if (response.status === 'connected') {
            connectToApp();
        }

        return;
    }, {scope: 'email'});
}

function connectToApp() {
    FB.api('/me',
        {fields: up4_fb_scope},
        function(response) {
            up4_fb_data.action = 'fb_receiver';
            up4_fb_data.response = response;

            sendToApp();
        }
    );
}

function sendToApp() {
    jQuery.ajax({
        url: ajax_receiver.ajax_url,
        data: up4_fb_data,
        method: 'POST',
        success: function(data) {
            if(up4_fb_data.trigger != undefined && up4_fb_data.trigger === true) {
                window.top.location = window.location.href;
            }
        },
        error: function(data) {
            console.log(data);
        }
    });
}

(function($) {
    $(function() {
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

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
