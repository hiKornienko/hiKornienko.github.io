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

//=== scroll menu ===//
window.addEventListener('scroll', function() {
  if(pageYOffset > 140){
    document.querySelector('.logo').style.lineHeight = '60px';
    document.querySelector('.nav-btn').style.lineHeight = '60px';
  }else{
    document.querySelector('.logo').style.lineHeight = '80px';
    document.querySelector('.nav-btn').style.lineHeight = '80px';
  }
});
//=== / scroll menu ===//
