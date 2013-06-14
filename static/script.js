var frames = ['|', '/', '-', '\\'];
var frameIndex = 0;

function nextFrame() {
    frameIndex = frameIndex == frames.length - 1 ? 0 : frameIndex + 1;
    return frames[frameIndex];
}

$(function() {
    $('.button.active').click(function() {
        $('#output').hide();
        $('.button').removeClass('active');

        var myTimer = setInterval(function() {
            $('.button').html(nextFrame());
        }, 100);
        
        $.ajax({
            type: 'GET',
            url: '/deploy',
        }).done(function(msg) { 
            clearInterval(myTimer);
            $('.button').addClass('active').html('Deploy');
            $('#output').show().html(msg);
        });
        return false;
    });
});
