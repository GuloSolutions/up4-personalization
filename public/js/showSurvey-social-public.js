(function ($) {

    $('#show-survey, #show-survey-again').on('click', function(e) {
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    });

    $(window).on('hashchange', function() {
        if (window.location.hash.slice(1) == "take-quiz") {
            $('#survey-social-public').addClass('active');
            $('.site-header').addClass('under');
        }
    });

    $('a[href="#take-quiz"]').click(function(e){

        e.preventDefault();

        var $survey = $('survey-social-public');
         $('#survey-social-public').addClass('active');
         $('.site-header').addClass('under');

        $('html, body').animate({
            scrollTop: $("#survey-social-public").offset().top
        }, 1000);
        return false;

    });

})(jQuery);
