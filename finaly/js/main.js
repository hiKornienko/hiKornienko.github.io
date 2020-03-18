///*** Подключаем карулесь ***///
$('.owl-carousel').owlCarousel({
loop:true,
nav:true,
responsive:{
   0:{
       items:1
   },
   600:{
       items:3
   },
   1000:{
       items:4
   }
}
})
///*** / Подключаем карулесь ***///

//*** Фикc совмещения 2 скриптов, owlcarousel и tab bootstrap ***//
$('#coffe-tab').on('click', function(event){
$('#coffe-tab .nav-item .active').removeClass("active");
});
$('#machine-tab').on('click', function(event){
$('#machine-tab .nav-item .active').removeClass("active");
});
//*** / Фикc совмещения 2 скриптов, owlcarousel и tab bootstrap ***//

/*** плавный скроллинг ***/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/*** / плавный скроллинг ***/

/*** отправка запроса ***/


/*** / отправка запроса ***/
