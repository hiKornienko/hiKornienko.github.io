document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector('[data-el="input_email"]')
  const emailInput = email.querySelector('input')
  const password = document.querySelector('[data-el="input_password"]')
  const error = document.querySelector('[data-el="error"]')
  const btn = document.querySelector('[data-el="button"]')
  const dots = document.querySelector('[data-el="dots"]')

  emailInput.addEventListener('input', (e) => {
    if (validateEmail(e.target.value) == false) {
      email.classList.add('input__wrap--error')
      email.dataset.validate = false
    } else {
      email.classList.remove('input__wrap--error')
      email.dataset.validate = true
    }
    validate()
  })

  password.addEventListener('input', (e) => {
    if (e.target.value.length >= 1) {
      password.dataset.validate = true
    } else {
      password.dataset.validate = false
    }
    validate()
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
    })
  )

})
