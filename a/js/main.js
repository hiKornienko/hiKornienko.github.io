document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector('[data-el="input_email"]')
  const emailInput = email.querySelector('input')
  const emailError= document.querySelector('[data-el="email_error"]')
  const password = document.querySelectorAll('[data-el="input_password"]')
  const error = document.querySelector('[data-el="error"]')
  const btn = document.querySelector('[data-el="button"]')
  const dots = document.querySelector('[data-el="dots"]')
  const showPass = document.querySelector('[data-el="show-password"]')

  emailInput.addEventListener('input', (e) => {
    if (validateEmail(e.target.value) == false) {
      emailError.innerHTML = 'Invalid email address'
      email.classList.add('input__wrap--error')
      email.dataset.validate = false
    } else {
      email.classList.remove('input__wrap--error')
      email.dataset.validate = true
    }

    if(e.target.value.length == 0){
        emailError.innerHTML = 'Your email is required'
    }
    validate()
  })

  password.forEach((el,index) =>{
    const input = el.querySelector('input')
    input.addEventListener('input', (e) => {
      if (e.target.value.length >= 1) {
        el.classList.remove('input__wrap--error')
        el.dataset.validate = true
      } else {
        el.classList.add('input__wrap--error')
        el.dataset.validate = false
      }
      validate()
    })

    const view = el.querySelector('[data-el="show-password"]')
    console.log(view)
    view.addEventListener('click', (e)=> {
      if(input.type == 'password'){
        input.type = 'text'
        view.classList.add('show-password-true')
      }
      else{
        input.type = 'password'
        view.classList.remove('show-password-true')
      }
    })
  })


  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.classList.add('is-loading')
    dots.classList.add('loading-state')

    setTimeout(() => {
      btn.classList.remove('is-loading')
      dots.classList.remove('loading-state')
      error.classList.add('show')
    }, 1000);
  })

  function validateEmail(value) {
    let v = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    return v.test(value)
  }

  function validate() {
    const chek = document.querySelectorAll('[data-validate="true"]')
    if (chek.length >= 2) {
      btn.classList.remove('is-disabled')
      btn.disabled = false
    }
    else{
      btn.classList.add('is-disabled')
      btn.disabled = true
    }
  }


  // tabs

  const tabs = document.querySelectorAll('[data-tab]')
  const openTab = document.querySelectorAll('[data-tab-open]')

  openTab.forEach(item =>
    item.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.add('hide')
      })

      tabs[e.target.dataset.tabOpen].classList.remove('hide')

      if(e.target.dataset.tabOpen == 0){
        setLocation('/')
      }

      if(e.target.dataset.tabOpen == 1){
        setLocation('forgot-password')
      }

      if(e.target.dataset.tabOpen == 2){
        setLocation('register')
      }
    })
  )

})

function setLocation(curLoc){
    try {
      history.pushState(null, null, curLoc);
      return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}
