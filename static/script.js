$(function() {
    $('.button').click(function() {
        var $button = $(this);
        if (!$button.hasClass('disabled')) {
            $('#output').hide();
            $('#loading').show();
            $button.addClass('disabled');

	    $.ajax({
                type: 'GET',
                url: '/deploy',
            }).done(function(msg) { 
                $button.removeClass('disabled');
                $('#loading').hide();
                $('#output').show().html(msg);
            });
        }
        return false;
    });
});
