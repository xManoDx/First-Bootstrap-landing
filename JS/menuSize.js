$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        $('#menu').addClass('scroll');
    }
    else {
        $('#menu').removeClass('scroll')
    }
});