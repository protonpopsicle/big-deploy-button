var frames = ['|', '/', '-', '\\'];
var frameIndex = 0;

function nextFrame() {
    frameIndex = frameIndex == frames.length - 1 ? 0 : frameIndex + 1;
    return frames[frameIndex];
}

$(function() {
    $('.button').not('.disabled').click(function() {
        console.log("hey");
        $('#output').hide();
        $('.button').addClass('disabled');

        var myTimer = setInterval(function() {
            $('.spinner').html(nextFrame());
        }, 100);
        
        $.ajax({
            type: 'GET',
            url: '/deploy',
        }).done(function(msg) { 
            clearInterval(myTimer);
            $('.button').removeClass('disabled').html('Deploy');
            $('#output').show().html(msg);
        });
        return false;
    });
});
