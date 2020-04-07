
/*
 Создаем левоем мменю категорий имея Список всех категорий и id нашей категории.
 Добавляем категории и скрываем контент.
*/

/*Находим наше место в массиве*/
var navId;

if ($category_arr[$category_id].parentid == 0) {
  navId = $category_id;
} else {
  if ($category_arr[$category_arr[$category_id].parentid].parentid == 0) {
    navId = $category_arr[$category_id].parentid;
  } else {
    navId = $category_arr[$category_arr[$category_id].parentid].parentid;
  }
}

/* Рисуем меню */
if (navId) {
  for (key in $category_arr) {
    if ($category_arr[key].parentid === navId) {
      document.querySelector('.js-nav').innerHTML += '<li><a href="' + $category_arr[key].alt_name + '">' + $category_arr[key].name + '</a></li>'
    }
  }
}



/* Рисуем категории */

for (key in $category_arr) {
   if($category_id === $category_arr[key].parentid){
     console.log('выводим категории '+ $category_id);
     catDraw();
     break;
   }else{
     console.log('нечего не делаем ' + $category_id);
   }
}
/* Функции */

function catDraw(){
  for (key in $category_arr) {
    if(key == 1){document.querySelector('.js-season').innerHTML = ''}
    if($category_arr[key].parentid === $category_id){
      document.querySelector('.js-season').innerHTML += '<div class="season__item"><a href="'+$category_arr[key].alt_name+'"><img src="'+$category_arr[key].icon+'" alt="'+$category_arr[key].name+'"><div class="season__item--title"><span>'+$category_arr[key].name+'</span></div></a></div>';
    }
  }
}
