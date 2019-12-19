//=== menu ===//
document.querySelector('.js-nav-btn').onclick = function(){
  let nav_menu = document.querySelector('.js-nav-menu');
  if(nav_menu.style.display == 'none' || nav_menu.style.display == ''){
      nav_menu.style.display = 'block';
  }else{
      nav_menu.style.display = 'none';
  }
}
//=== menu ===//
