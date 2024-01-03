$(function (){

    'use strict';

    // client

    $(".client .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 2
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });

    // Testimonials

    $(".Testimonials .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 1,
        nav: true,
        loop: true,
        dots: false,
    });

    // scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
        $('.scroll-top').fadeIn(400);
    }else{
        $('.scroll-top').fadeOut(400);
    }
});
$('.scroll-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


});
