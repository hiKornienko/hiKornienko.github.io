const products = document.querySelectorAll(".js-products");

var productsArr = [];

for (const product of products) {
  product.addEventListener('click', function(event) {
    //create arr
    if(product.dataset.productValue === ''){
       product.dataset.productValue = productParent(event.path).dataset.productId;
    }else{
      product.dataset.productValue += ',' + productParent(event.path).dataset.productId;
    }
    productsArr = product.dataset.productValue.split(',');

    console.log(productsArr);
    //control or stop script
    if(productsArr.includes(productParent(event.path).dataset.productId) === true){
      productsDrawDel(this,productParent(event.path).dataset.productId);
      productsArr.splice(productsArr.indexOf(productParent(event.path).dataset.productId), 1);
      //productsAddForm(this);
      return
    }
    //add
    productsArr.push(productParent(event.path).dataset.productId);
    //del > 3
    if (productsArr.length > 3) {
      productsDrawDel(this,productsArr.shift());
    }
    //draw
    productsDraw(this);
    //add form
    //productsAddForm(this);
     console.log(productsArr);
  })
}
function productParent(path){
  for (i = 0; i < path.length; i++) {
    if(path[i].dataset.productId){
      return path[i];
    }
    if(path[i].classList.contains("js-products")){
      return
    }
  }
}
function productsDraw(doc) {
  for (i = 0; i < productsArr.length; i++) {
    doc.querySelector('[data-product-id ="'+productsArr[i]+'"]').classList.add("selected");
  }
}
function productsDrawDel(doc,id) {
  doc.querySelector('[data-product-id ="'+id+'"]').classList.remove("selected");
}
function productsAddForm(doc) {
  doc.querySelector('[name="oproduct_id"]').value = productsArr.join(',');
  console.log(doc.querySelector('[name="oproduct_id"]'));
}
