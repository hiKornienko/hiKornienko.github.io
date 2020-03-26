const products = document.querySelectorAll(".js-product27")//add php id
let productsArr = [];

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
    //Alert
    if (productsArr.length == 1) {
      alert('уведомление')
    }
    //del > 3
    if (productsArr.length > 3) {
      document.getElementById(productsArr.shift()).classList.remove("selected");
    }
    //draw
    productsAdd();
    //add form
    productsAddForm();
  })
}

function productsAdd() {
  for (i = 0; i < productsArr.length; i++) {
    document.getElementById(productsArr[i]).classList.add("selected");
  }
}
function productsAddForm() {
  document.querySelector('[name="oproduct_id"]').value = productsArr.join(',');
  console.log(document.querySelector('[name="oproduct_id"]'));
}
