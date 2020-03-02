/*** плавный скроллинг ***/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/*** / плавный скроллинг ***/

/*** отправка запроса ***/
let name = document.querySelector('input[name="name"]');
let phone = document.querySelector('input[name="phone"]');
let send = document.querySelector('input[type="button"]');
let ok = document.querySelector('.footer__form-ok');
let eror = document.querySelector('.footer__form-eror');

send.onclick = function() {
  if (name.value.length > 1 && phone.value.length > 1) {
    var xhr = new XMLHttpRequest();
    var body = 'name=' + encodeURIComponent(name.value) + '&phone=' + encodeURIComponent(phone.value);
    xhr.open("POST", '/mail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        eror.innerHTML = '';
        ok.innerHTML = 'Заявка отправлена';
        name.value = '';
        phone.value = '';
      }
    }
    xhr.send(body);
  } else {
    eror.innerHTML = 'Заполните все поля';
  }
}

/*** / отправка запроса ***/
