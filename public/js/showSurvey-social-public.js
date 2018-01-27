$(function() {
    $.ajax({
        url: ajax_receiver.ajax_url,
    }).success(function (e) {
        $('#show-survey').on('click', function(e) {

        $('#survey-social-public').insertAfter($('header'));

        $('#survey-social-public').show();

        });
    })
});
