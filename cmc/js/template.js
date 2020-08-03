/** search **/
let search_icon = document.querySelector('.js-search-icon');
let search_input = document.querySelector('.js-search-input');

search_icon.onclick = function() {
  search_input.classList.toggle('active');
}
/** search **/


/** nav **/
let html = document.querySelector('.js-html');
let nav = document.querySelector('.js-nav');
let header = document.querySelector('.js-header');
let nav_icon = document.querySelector('.js-nav-icon');
let nav_inner = document.querySelector('.js-nav-inner');
let nav_text = document.querySelector('.js-nav-text');
let category_sub_item = document.querySelectorAll('.js-nav-category-sub');
let category_sub_item_back = document.querySelectorAll('.js-nav-category-sub-back');

if (window.innerWidth < 1366) {
  nav_inner.onclick = function() {
    html.classList.toggle('nav-active');
    header.classList.toggle('active');
    nav.classList.toggle('active');
    nav_icon.classList.toggle('active');
    nav_text.classList.toggle('active');
    search_input.classList.remove('active');
  }

  for (const category_sub of category_sub_item) {
    category_sub.addEventListener('click', function(event) {
      let sub = event.target.nextElementSibling;
      sub.classList.add('active');
    })
  }

  for (const category_back of category_sub_item_back) {
    category_back.addEventListener('click', function(event) {
      let back = event.target.offsetParent;
      back.classList.remove('active');
    })
  }
}

let w = window.innerWidth;
window.addEventListener('resize', function() {
  let nW = window.innerWidth;
  if(nW >= 1366 && w <= 1366 || nW <= 1366 && w >= 1366){
    location.reload();
  }
});
/** nav **/


//** basket **/

//** basket **/

//** footer **/
let footer_title = document.querySelectorAll('.js-footer-title');
for (const title of footer_title) {
  title.addEventListener('click', function(event) {
    title.classList.toggle('active');
  })
}
//** footer **/
