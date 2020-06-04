/* menu */
let logo = document.querySelector('.js-nav-logo');
let burger = document.querySelector('.js-nav-burger');
let nav = document.querySelector('.js-nav');

burger.onclick = function(){
  logo.classList.toggle('active');
  burger.classList.toggle('active');
  nav.classList.toggle('active');
}
/* menu */


/* owlcarousel*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    animateInClass:true,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:3,
            nav:true
        }
    }
});
/* owlcarousel */

/* scroll */
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});
/* scroll */

/* toTop */
$(document).ready(function() {
  var button = $('.js-top');
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
});
/* toTop */
