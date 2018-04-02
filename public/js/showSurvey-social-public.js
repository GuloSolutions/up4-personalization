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

        $('html, body').animate({
            scrollTop: $("#survey-social-public").offset().top
        }, 2000);
    });

    $('a[href="#take-quiz"]').click(function(e){
        window.location.replace("#take-quiz", ' ');
        e.preventDefault();
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');

        $('html, body').animate({
            scrollTop: $("#survey-social-public").offset().top
        }, 2000);

        return false;
    });

})(jQuery);
