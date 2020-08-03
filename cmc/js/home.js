$(document).ready(function(){
    $('.owl-slider').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:2000,
        responsive:{
            0:{
                nav:false,
                items:1
            },
            1024:{
               nav:true,
               items:1
            }
        }
    });

    $('.owl-hit').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:1000,
        dots:false,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
               items:2
            },
            1366:{
               items:4
            },
        }
    });

});
