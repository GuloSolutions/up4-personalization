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

    if (window.location.hash == '#take-quiz'){
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    }


    $('a[href="#take-quiz"]').click(function(){
         $('#survey-social-public').addClass('active');
         $('.site-header').addClass('under');
    });

})(jQuery);
