$(function() {
    $('#show-survey, #show-survey-again').on('click', function(e) {
        $('#survey-social-public').insertAfter($('.site-header'));
        $('#survey-social-public').show(); //.css('display', 'flex');
    });
});
