'use strict';

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1350071051786117',
        cookie     : true,
        xfbml      : true,
        autoLogAppEvents: true,
        status     : true,
        version    : 'v2.11'
    });

    FB.Event.subscribe('auth.login', function(response) {
        if (response.authResponse) {
            window.top.location = window.location.href;
        }
    });

    FB.Event.subscribe('auth.logout', function(response) {
        var receiver = {
            'action': 'fb_logout'
        };

        jQuery.ajax({
            url: ajax_receiver.ajax_url,
            data: receiver,
            method: 'POST'
        });

        window.top.location = window.location.href;
    });

    facebookLogin();
};

function facebookLogin() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {

            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            connectToApp();

        } else if (response.status === 'not_authorized') {

          //load survey

        } else {

          //load survey

          return;
        }
    }, true);

}

function connectToApp() {
    FB.api('/me',
        {fields: 'id, name, first_name, last_name, email, gender, birthday, picture.width(800).height(800)'},
        function(response) {
            sendToApp(response);
        }
    );
}

function sendToApp(response) {
    var receiver = {
        'action': 'fb_receiver',
        'response': response
    };

    jQuery.ajax({
        url: ajax_receiver.ajax_url,
        data: receiver,
        method: 'POST',
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
