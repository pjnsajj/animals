$('.mobile-btn').on('click',  function() {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.nav').toggleClass('show-menu');
    $('.nav-item').toggleClass('show-nav-item')
});

$('.nav nav a').on('click',  function() {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.nav').removeClass('show-menu');
    $('.nav-item').removeClass('show-nav-item')
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
});