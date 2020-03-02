<?php
//*********************** Главная страница *************************
session_start();
$period_cookie = 2592000; // 30 дней (2592000 секунд)

if($_GET){
    setcookie("utm_source",$_GET['utm_source'],time()+$period_cookie);
    setcookie("utm_medium",$_GET['utm_medium'],time()+$period_cookie);
    setcookie("utm_term",$_GET['utm_term'],time()+$period_cookie);
    setcookie("utm_content",$_GET['utm_content'],time()+$period_cookie);
    setcookie("utm_campaign",$_GET['utm_campaign'],time()+$period_cookie);
}

if(!isset($_SESSION['utms'])) {
    $_SESSION['utms'] = array();
    $_SESSION['utms']['utm_source'] = '';
    $_SESSION['utms']['utm_medium'] = '';
    $_SESSION['utms']['utm_term'] = '';
    $_SESSION['utms']['utm_content'] = '';
    $_SESSION['utms']['utm_campaign'] = '';
}
$_SESSION['utms']['utm_source'] = $_GET['utm_source'] ? $_GET['utm_source'] : $_COOKIE['utm_source'];
$_SESSION['utms']['utm_medium'] = $_GET['utm_medium'] ? $_GET['utm_medium'] : $_COOKIE['utm_medium'];
$_SESSION['utms']['utm_term'] = $_GET['utm_term'] ? $_GET['utm_term'] : $_COOKIE['utm_term'];
$_SESSION['utms']['utm_content'] = $_GET['utm_content'] ? $_GET['utm_content'] : $_COOKIE['utm_content'];
$_SESSION['utms']['utm_campaign'] = $_GET['utm_campaign'] ? $_GET['utm_campaign'] : $_COOKIE['utm_campaign'];
 ?>
 <!DOCTYPE html>
 <html lang="ru">

 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="css/main.css">
   <title>Планшет Magic Pad</title>
   <meta name="description" content="Предлагаем первый детский неоновый планшет для рисования от немецкой компании MagicPad">
 </head>

 <body>
   <!-- header -->
   <header class="header">
     <div class="container">
       <div class="row align-items-center justify-content-around">
         <div class="col-12 col-md-4">
            <div class="header__info">
              <h1>планшет <span>Magic Pad</span></h1>
              <p>для развития и активного отдыха<br>
                 с доставкой по Украине</p>
               <a href="#one"><i class="fas fa-angle-double-down"></i> узнать больше</a>
            </div>
         </div>
         <div class="col-md-4 d-none d-md-block">
           <div class="header__img">
            <img src="img/item.png" alt="Планшет Magic Pad" title="Планшет Magic Pad">
            </div>
         </div>
       </div>
     </div>
   </header>
   <!-- / header -->

   <!-- section -->
   <section class="one" id="one">
      <div class="container">
        <h2 class="one__title">Преимущества планшета <span>MAGIC PAD</span></h2>
        <div class="row justify-content-between">
          <div class="col-12 col-md-4">
            <div class="one__block">
               <div class="one__block-icon"><i class="far fa-smile"></i></div>
               <h2 class="one__block-title">Внешний вид</h2>
               <p class="one__block-text">Благодаря красивым и ярким рисункам, светящиеся даже в темной комнате - снижает боязнь темноты у ребенка</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="one__block">
               <div class="one__block-icon"><i class="fas fa-leaf"></i></div>
               <h2 class="one__block-title">Сохранение зрения</h2>
               <p class="one__block-text">Все комплектующие набора изготовлены из сертифицированных и безопасных материалов.</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="one__block">
               <div class="one__block-icon"><i class="fas fa-users"></i></div>
               <h2 class="one__block-title">Коллективность</h2>
               <p class="one__block-text">Набор можно использовать для совместного творчества родителей и детей.</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="one__video">
               <iframe src="https://www.youtube.com/embed/piz2dXdkoHM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style=""></iframe>
            </div>
          </div>
          <div class="col-md-12">
            <div class="one__button">
                 <a href="#footer">хочу себе !</a>
            </div>
          </div>
        </div>
      </div>
   </section>
   <!-- / section -->

   <!-- footer -->
   <footer class="footer" id="footer">
     <div class="container">
       <div class="row">
          <div class="col-12">
            <form class="footer__form">
              <h2 class="footer__form-title">ОСТАВЬТЕ ЗАЯВКУ</h2>
              <p class="footer__form-price">чтобы заказать планшет за <span class="footer__form-price-old">820 грн</span>  <span class="footer__form-price-new">399 грн</span></p>
              <input type="text" name="name" placeholder="Имя*" required>
              <input type="text" name="phone" placeholder="Номер телефона*" required>
              <input type="button" value="Заказать планшет">
              <p class="footer__form-ok"></p>
              <p class="footer__form-eror"></p>
            </form>
          </div>
       </div>
     </div>
   </footer>
   <!-- / footer -->

   <script src="js/main.js"  crossorigin="anonymous"></script>
 </body>
 </html>
