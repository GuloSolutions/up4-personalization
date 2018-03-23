(function ($) {
    $activate_survey = function() {
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    };

    $('#show-survey, #show-survey-again').on('click', function(e) {
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    });

    $(window).on('hashchange', function() {
        if (window.location.hash.slice(1) == "take-survey") {
            $('#survey-social-public').addClass('active');
            $('.site-header').addClass('under');
        }
    });

    if (location.hash == '#take-survey'){
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    }

})(jQuery);
