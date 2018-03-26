(function ($) {

    $('#show-survey, #show-survey-again').on('click', function(e) {
        $('#survey-social-public').addClass('active');
        $('.site-header').addClass('under');
    });

    $('a[href="#take-quiz"]').click(function(){

         $('#survey-social-public').addClass('active');
         $('.site-header').addClass('under');

        var after_hash = window.location.href.split('#')[1];
        var before_hash = window.location.href.split('#')[0];
        if (after_hash.length) {
          window.location.href = before_hash;
        }

    });

})(jQuery);
