'use strict';

window.fbAsyncInit = function() {
    FB.init({
        appId      : '2020688834841149',
        cookie     : true,
        xfbml      : true,
        autoLogAppEvents: true,
        version    : 'v2.11'
    });

    facebookLogin();
};

function facebookLogin() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {

            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            connectToApp();
            //window.location.href = 'http://goldmember.gulosolutions.com:3333/sample-page';

        } else if (response.status === 'not_authorized') {

          //load survey

        } else {

          //load survey

          return;
        }
    }, true);

}

function connectToApp() {
    console.log('Fetching your information....');

    FB.api('/me', function(response) {

        console.log('Successful login for: ' + response.name);

        sendToApp(response);
    });
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
