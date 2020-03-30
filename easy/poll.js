const products = document.querySelectorAll(".js-products")

for (const product of products) {
  product.addEventListener('click', function(event) {
    if(productParent(event.target) === undefined){
      return
    }
    //close selected
    if(productParent(event.target).classList.contains('selected')){
      arr = product.dataset.productValue.split(',');
      arr.splice(arr.indexOf(productParent(event.target).dataset.productId), 1);
      product.dataset.productValue = arr.join(',');
      productsDraw(this,arr);
      productsAddForm(this);
      return
    }

    //create arr
    if (product.dataset.productValue === '') {
      product.dataset.productValue = productParent(event.target).dataset.productId;
    } else {
      product.dataset.productValue += ',' + productParent(event.target).dataset.productId;
    }
    arr = product.dataset.productValue.split(',');
    //del > 3
    if(arr.length > 3){
      arr.shift();
      product.dataset.productValue = arr.join(',');
    }
    //draw
    productsDraw(this,arr);
    //add form
    productsAddForm(this);
  });
}

function productParent(path) {
  if(path.parentNode.dataset.productId){
     return path.parentNode;
  }else if(path.parentNode.parentNode.dataset.productId){
     return path.parentNode.parentNode;
  }else if(path.parentNode.parentNode.parentNode.dataset.productId){
     return path.parentNode.parentNode.parentNode;
  }else if(path.parentNode.parentNode.parentNode.parentNode.dataset.productId){
     return path.parentNode.parentNode.parentNode.parentNode;
  }else{
     return undefined;
  }
}
function productsDraw(doc,arr) {
  let selecteds = doc.querySelectorAll('[data-product-id]');
  for (const selected of selecteds) {
    if(selected.classList.contains("selected")){
       selected.classList.remove("selected");
    }
  }
  for (i = 0; i < arr.length; i++) {
    doc.querySelector('[data-product-id ="'+arr[i]+'"]').classList.add("selected");
  }
}
function productsAddForm(doc){
  doc.querySelector('[name="oproduct_id"]').value = doc.dataset.productValue;
}
