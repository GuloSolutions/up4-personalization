(function ($) {
    var showSurvey = function() {
        var $survey = $('#survey-social-public');

        if ($survey.length) {
            $('html, body').animate({
                scrollTop: $survey.offset().top
            }, 1000);

            $survey.addClass('active');
            $('.site-header').addClass('under');
        }
    };

    $('#show-survey, #show-survey-again').on('click', function(e) {
        e.preventDefault();

        showSurvey();

        return false;
    });

    $(window).on('hashchange', function() {
        if (window.location.hash.slice(1) == "take-quiz") {
            showSurvey();
        }

        return false;
    });

    $('a[href="#take-quiz"]').click(function(e){
        e.preventDefault();

        window.location.replace("#take-quiz");

        showSurvey();

        return false;
    });
})(jQuery);
