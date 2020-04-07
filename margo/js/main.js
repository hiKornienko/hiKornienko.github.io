let menu = document.querySelector('.js-menu');
let menuBtn = document.querySelector('.js-menu-btn');

menuBtn.onclick = function(){
  menu.classList.toggle("menu-active");
  menuBtn.classList.toggle("nav__wrap--btn--active");
}
