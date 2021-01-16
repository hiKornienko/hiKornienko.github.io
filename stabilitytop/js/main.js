/*
* lang
*/
document.addEventListener('DOMContentLoaded', lang);
function lang(){
  document.addEventListener('click', event => {
    if(event.target.classList[0] == 'lang__active' || event.target.classList[0] == 'lang__select--li'){
      if(event.target.classList[0] == 'lang__active'){
        event.target.classList.add('active');
      }
    }else{
      const buttons = document.querySelectorAll('.lang__active');
      for(let button of buttons){
        button.classList.remove('active');
      }
    }
  })
}
/*
* lang
*/

/*
* headerProfile
*/
document.addEventListener('DOMContentLoaded', headerProfile);
function headerProfile(){
  document.addEventListener('click', event => {
    if(event.target.classList[0] == 'nav__profile--btn' || event.target.classList[0] == 'nav__profile--href'){
      if(event.target.classList[0] == 'nav__profile--btn'){
        event.target.classList.add('active');
      }
    }else{
      const button = document.querySelector('.nav__profile--btn');
      button.classList.remove('active');
    }
  })
}
/*
* headerProfile
*/

/*
* nav
*/
document.addEventListener('DOMContentLoaded', nav);
function nav(){
  const btn = document.querySelector('.nav__burger');
  const close = document.querySelector('.nav__close');
  const inner = document.querySelector('.nav__inner');

  btn.addEventListener('click', event => {
    if(btn.classList.contains('active')){
      btn.classList.remove('active')
    }else{
      btn.classList.add('active')
    }
  })

  close.addEventListener('click', event => {
    btn.classList.remove('active')
  })

  inner.addEventListener('click', event => {
    if(event.target.classList.contains('nav__inner')){
      btn.classList.remove('active')
    }
  })
}
/*
* nav
*/

/*
* modal
*/
document.addEventListener('DOMContentLoaded', useModal);
function useModal(){
  const buttons = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('[data-modal-id]');
  let param = false;

  for(let button of buttons){
    button.addEventListener('click', event => {
      let block = document.querySelector('[data-modal-id="'+ button.dataset.modal +'"]');
      if(block != null){
        if(!block.classList.contains('active')){
          block.classList.add('active');
        }
      }
    })
  }

  for(let modal of modals){
    modal.addEventListener('mousedown', event => {
      param = false;
      if(event.target.dataset.modalId != undefined){
        param = true;
      }
    });

    modal.addEventListener('mouseup', event => {
      if(param){
        modal.classList.remove('active');
      }
    });

  }

}
/*
* modal
*/

/*
* modal-deposit
*/
document.addEventListener('DOMContentLoaded', modalDeposit);
function modalDeposit(){
  const minDeposit = 50;
  const max = 7;//length
  const width = 40;//px
  const block = document.querySelector('.modal__deposit--input');
  const input = block.querySelector('input');
  const nav = document.querySelectorAll('[data-deposit-nav]');
  const btn = document.querySelector('.modal__deposit--btn');
  const alert = document.querySelector('.modal__deposit--alert');

  input.addEventListener('input', event => {
    transform(event.target.value);
  })

  for(let item of nav){
    item.addEventListener('click', event => {
      input.value = event.target.dataset.depositNav;
      transform(event.target.dataset.depositNav);
    })
  }

  function transform(value){
    if(value.length > 0){
      input.style.width = width * value.length + 'px';
    }else{
      input.style.width = width + 'px';
    }

    if(value.length >= 4){
      block.style.transform = 'scale(0.8)';
    }else{
      block.style.transform = 'scale(1)';
    }

    if(value.length >= max){
      input.value = value.substr(0, value.length - 1);
      input.style.width = ((max - 1) * width) + 'px';
    }

    check();
  }

  function check(){
    block.classList.remove('active');
    btn.classList.remove('active');

    if(input.value >= minDeposit){
      block.classList.add('active');
      btn.classList.add('active');
      alert.innerHTML = '';
    }else{
      alert.innerHTML = `The amount must be equal to or more than ${minDeposit}UAH`;
    }
  }
}
/*
* modal-deposit
*/
