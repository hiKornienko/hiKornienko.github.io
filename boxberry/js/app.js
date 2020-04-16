/* delivery open + pay show*/
let deliveryOpen = document.querySelectorAll("[data-open]");
let deliveryOpenBlock = document.querySelectorAll(".js-open");
let pay = document.querySelectorAll(".js-pay");

for (const open of deliveryOpen) {
  open.addEventListener('click', function(event) {

    removeActive(deliveryOpen);

    this.classList.add("active");

    removeShow(deliveryOpenBlock);

    deliveryOpenBlock[this.dataset.open].classList.add("show");

    removeActive(pay);

    removeShow(pay);

    payShow(this.dataset.pay.split(','));

  })
}

for (const button of pay) {
  button.addEventListener('click', function(event) {

    removeActive(pay);

    this.classList.add("active");

  })
}

function removeActive(arr) {
  for (const remove of arr) {
    remove.classList.remove("active");
  }
}

function removeShow(arr) {
  for (const remove of arr) {
    remove.classList.remove("show");
  }
}

function payShow(arr) {
  for (const i of arr) {
    pay[i].classList.add("show");
  }
  pay[arr[0]].classList.add("active");
}
/* / delivery open*/

/* function */

/* / function */
