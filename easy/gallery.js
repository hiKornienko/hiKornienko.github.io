let gallery_arr = document.querySelectorAll('#allEntries img');
let gallery_photo = document.querySelector('.gallery__photo');
let gallery_left = document.querySelector('.gallery__left');
let gallery_right = document.querySelector('.gallery__right');
let gallery_number = document.querySelector('.gallery__number');

console.log(gallery_arr);

gallery('default');

gallery_left.onclick = function(){
  if(gallery_photo.dataset.id > 0){
   gallery(false);
  }
}

gallery_right.onclick = function(){
  if(gallery_photo.dataset.id < gallery_arr.length - 1){
    gallery(true);
  }
}

function gallery(id){
  let newId;
  if(id == "default"){
       newId = 0;
  }
  if(id == false){
       newId = +gallery_photo.dataset.id - 1;
  }
  if(id == true){
       newId = +gallery_photo.dataset.id + 1;
  }

  gallery_photo.src = gallery_arr[newId].src;
  gallery_photo.alt = gallery_arr[newId].alt;
  gallery_photo.title = gallery_arr[newId].alt;
  gallery_photo.dataset.id = newId;
  gallery_number.innerHTML =  newId + 1  +' из '+ gallery_arr.length;
}
