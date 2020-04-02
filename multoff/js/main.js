if($(window).width() >= 1024){
  $('.js-home').addClass(('owl-carousel'));
}else{
  $('.js-home').removeClass(('owl-carousel'));
};


$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,
    navSpeed:1000,
})
