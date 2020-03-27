const phpId = 27;//add php id
const products = document.querySelectorAll(".js-product"+ phpId)
var productsArr = [];

for (const product of products) {
  product.addEventListener('click', function(event) {
    //control or stop script
    if(productsArr.includes(this.id) === true){
      this.classList.remove("selected");
      productsArr.splice(productsArr.indexOf(this.id), 1);
      productsAddForm();
      return
    }
    //add
    productsArr.push(this.id);
    //del > 3
    if (productsArr.length > 3) {
      document.getElementById(productsArr.shift()).classList.remove("selected");
    }
    //draw
    productsDraw();
    //add form
    productsAddForm();
  })
}

function productsDraw() {
  for (i = 0; i < productsArr.length; i++) {
    document.getElementById(productsArr[i]).classList.add("selected");
    console.log(productsArr);
  }
}
function productsAddForm() {
  document.querySelector('[name="oproduct_id"]').value = productsArr.join(',');
  console.log(document.querySelector('[name="oproduct_id"]'));
}
