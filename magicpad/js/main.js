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
// document.addEventListener('DOMContentLoaded', () => {
//
//     const ajaxSend = (formData) => {
//         fetch('mail.php', { // файл-обработчик
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json', // отправляемые данные
//             },
//             body: JSON.stringify(formData)
//         })
//             .then(response => alert('Сообщение отправлено'))
//             .catch(error => console.error(error))
//     };
//
//     const forms = document.getElementsByTagName('form');
//     for (let i = 0; i < forms.length; i++) {
//         forms[i].addEventListener('submit', function (e) {
//             e.preventDefault();
//
//             let formData = new FormData(this);
//             formData = Object.fromEntries(formData);
//
//             ajaxSend(formData);
//             this.reset();
//         });
//     };
// });

/*** / отправка запроса ***/
