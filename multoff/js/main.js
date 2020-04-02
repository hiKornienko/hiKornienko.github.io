//*** carousel ***//
if ($(window).width() >= 1024) {
  $('.js-home').addClass(('owl-carousel'));
} else {
  $('.js-home').removeClass(('owl-carousel'));
};

$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  autoplaySpeed: 1000,
  navSpeed: 1000,
})
//*** / carousel ***//

//*** video ***//
const player = new Plyr('#video');

var timeBlock = document.querySelector('.js-video-time-block');
var timeSpan = document.querySelector('.js-video-time');
var cookieName = document.querySelector('[data-cookie]').dataset.cookie;

if(getCookie(cookieName) != undefined){
  let time = Math.floor(getCookie(cookieName));
  timeSpan.innerHTML = Math.floor(time / 60) + ': ' + time % 60;
}

player.on('playing', event => {
  timeBlock.style.display = 'none';
  if (cookieName) {
    setInterval(function() {
      document.cookie = cookieName +"="+player.currentTime+"; path=/; expires=Tue," + inWeek();
      console.log(document.cookie);
    }, 10000);
  }
});

timeBlock.onclick = function(){
  player.forward(Math.floor(getCookie(cookieName)));
  player.play();
}

function inWeek(){
  let today = new Date(),
  inWeek = new Date();
  inWeek.setDate(today.getDate() + 7);
  inWeek = inWeek.toUTCString();
  return inWeek;
}
//*** video ***//

//*** cookie ***//
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
//*** / cookie ***//
