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
        var after_hash = window.location.href.split('#')[1];
        var before_hash = window.location.href.split('#')[0];
        if (after_hash.length) {
          window.location.href = before_hash;
        }
    }


    $('a[href="#take-quiz"]').click(function(response){

        alert(response);

         $('#survey-social-public').addClass('active');
         $('.site-header').addClass('under');

        var after_hash = window.location.href.split('#')[1];
        var before_hash = window.location.href.split('#')[0];
        if (after_hash.length) {
          window.location.href = before_hash;
        }
    });

})(jQuery);
