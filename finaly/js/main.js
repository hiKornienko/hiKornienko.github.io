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
document.querySelector('.js-form-3').onclick = function() {
  form(document.querySelector('.js-form-1'),document.querySelector('.js-form-2'),document.querySelector('.js-form-4'),document.querySelector('.js-form-5'),);
}
document.querySelector('.js-form2-3').onclick = function() {
  form(document.querySelector('.js-form2-1'),document.querySelector('.js-form2-2'),document.querySelector('.js-form2-4'),document.querySelector('.js-form2-5'),);
}

function form(name,phone,ok,eror){
  if (name.value.length > 1 && phone.value.length > 9) {
    var xhr = new XMLHttpRequest();
    var body = 'name=' + encodeURIComponent(name.value) + '&phone=' + encodeURIComponent(phone.value);
    xhr.open("POST", '/mail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        eror.innerHTML = '';
        eror.style.display = 'none';
        ok.style.display = 'block';
        name.value = '';
        phone.value = '';
      }
    }
    xhr.send(body);
  } else {
    ok.style.display = 'none';
    eror.style.display = 'block';
  }
}
/*** / отправка запроса ***/
