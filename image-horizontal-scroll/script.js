$(window).scroll(function() {
    var scroll_position = $(window).scrollTop()/2;
    $('.image').css({
        'background-position-x': - scroll_position + 'px'
    })
})