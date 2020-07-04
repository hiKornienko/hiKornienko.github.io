var program = document.querySelectorAll('.js-program');

for (const open of program) {
  open.addEventListener('click', function(event) {
    for(const item of program){
      item.classList.remove("active");
    }
    event.target.parentElement.classList.add("active");
  });
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
