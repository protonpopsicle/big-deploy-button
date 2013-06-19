var frames = ['|', '/', '-', '\\'];
var frameIndex = 0;

function nextFrame() {
    frameIndex = frameIndex == frames.length - 1 ? 0 : frameIndex + 1;
    return frames[frameIndex];
}

$(function() {
    $('.button').click(function() {
        var $button = $(this);
        if (!$button.hasClass('disabled')) {
            console.log('someshit');
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
