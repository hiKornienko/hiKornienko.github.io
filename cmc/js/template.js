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


//** sort **/
let sort = document.querySelector('.js-sort');

if(sort){
  let sort_name = sort.querySelector('span');
  let sort_list = sort.querySelectorAll('li');

  sort.addEventListener('click', function(event){
    console.log(event);
    sort.classList.toggle('active');
  })

  for (const list of sort_list) {
    list.addEventListener('click', function(event) {
      sort_name.innerHTML = list.innerHTML;
      return categorySort(list.dataset.value,'asc');
    })
  }
}
//** sort **/

//** gallery **/
let gallery = document.querySelector('.js-gallery');
let gallery_preview = document.querySelector('.js-gallery-preview');
let gallery_list = document.querySelector('.js-gallery-list');
if(gallery){
  let artNo = gallery.dataset.art;
  getFileNames(artNo).then(function(images){
    gallery_preview.src = images.full[0];

    for(i = 0; i < images.count; i++){
      gallery_list.innerHTML += '<div class="gallery__list--img js-gallery-img" data-src="'+ images.full[i]+'"><img alt="Маштабные модели" src="'+ images.preview[i] +'"></div>'
    }

    //Запуск owl carousel jquery
    $('.owl-shop-page').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:200,
        dots:false,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768:{
               items:3
            },
            1366:{
               items:5
            },
        }
    });
    //Запуск / owl carousel jquery

    var gallery_img = document.querySelectorAll('.js-gallery-img');
    for (const img of gallery_img) {
      img.addEventListener('click', function(event) {
        gallery_preview.src = img.dataset.src;
      })
    }

  })

  var gallery_magnifier = document.querySelector('.js-gallery-magnifier');

  gallery_magnifier.addEventListener('mouseover', function(event) {
    gallery_magnifier.classList.add('active');
  })

  gallery_magnifier.addEventListener('mouseout', function(event) {
    gallery_magnifier.classList.remove('active');
    gallery_preview.style.marginLeft = 'inherit';
    gallery_preview.style.marginTop = 'inherit';
  })

  gallery_magnifier.addEventListener('mousemove', magnifier, false);
}

function getFileNames(artNo) {
	return new Promise(function(resolve, reject) {
		$.get('https://alfamodeli.ru/import/images/work.php?articull='+artNo,function(data){
			var images = {
				full: data.array_full,
				preview: data.array_preview,
				count: data.array_full.length
			}
			resolve(images)
		});
	})
}

function magnifier(event){
  let target = event.target.closest('.js-gallery-magnifier');

  let blockW = gallery_magnifier.offsetWidth;
  let blockH = gallery_magnifier.offsetHeight;

  let imgW = gallery_preview.offsetWidth;
  let imgH = gallery_preview.offsetHeight;

  let targetCoords = target.getBoundingClientRect();
  let xCoord = event.clientX - targetCoords.left;
  let yCoord = event.clientY - targetCoords.top;

  let procentW = (xCoord * 100 / blockW);
  let procentH = (yCoord * 100 / blockH);

  let mLeft = Math.round(imgW - (imgW * (100 - procentW) / 100));
  let mTop = Math.round(imgH - (imgH * (100 - procentH) / 100));

  if(mLeft >= (imgW - blockW)){
    mLeft = imgW - blockW;
  }

  if(mTop >= (imgH - blockH)){
    mTop = imgH - blockH;
  }

  gallery_preview.style.marginLeft = '-' + mLeft + 'px';
  gallery_preview.style.marginTop = '-' + mTop + 'px';
}

//** gallery **/

//** home slider jquery **//
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

//** home slider jquery **//
