$(document).ready(function () {


    // Маска для телефона
    $("#form-phone1, #form-phone2, #form-phone3, #form-phone5").mask("+38 (099) 999-99-99");

     // открыть окно call me
    $('.call_me_win_open').click(function () {
        $('#call_me, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
      // открыть мобильное меню
    $('.head_item .logo').click(function () {
        $('.mmenu, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
    // окно регистрации на мобильном
    $('.bl_registr_info .send_butt').click(function () {
        $('#registr_win_mob, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });

    // открыть окно главное окно
    $('.open_win_questionnaire, .open_win, .tc_flex .send_butt, .butt_mob .send_butt, #open_win').click(function () {
        $('#main_win, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
    // Закрыть окна
    $('.bg_body, .close_win').click(function () {
        $('#main_win, .mmenu, #registr_win_mob, #call_me, .bg_body').fadeOut();
        $('body').removeClass('overflow-hidden');
    });

    // скролл вверх
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#up_back').fadeIn();
            } else {
                $('#up_back').fadeOut();
            }
        });
        $('#up_back').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#up_back_mob').fadeIn();
            } else {
                $('#up_back_mob').fadeOut();
            }
        });
        $('#up_back_mob').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });

    // скрыть кнопку обратной связи
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) <= $(".js-one").offset().top ) {
            $('.up_back, .call_me_win_open').removeClass('active__up') ;
        }
    });
    // плказать кнопку обратной связи
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) >= $(".section_2").offset().top ) {
            $('.up_back, .call_me_win_open').addClass('active__up') ;
        }
    });

    // скрывать меню на моб. при скролле
    $(window).resize(function(){
        if($(window).width() <= 992){
            $('.mmenu a').click(function () {
                $('.mmenu, .bg_body').fadeOut();
                $('body').removeClass('overflow-hidden');
            });
        }
    });
    // плавный скролл
    $('.mmenu a, .descr_h1 .send_butt a').on('click',
      function(){
        var scroll_el = $(this).attr('href');
          if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50}, 500);
          }
          return false;
      }
    );

     // выносим главное меню с плашки
    $(function() {
        var first = $(".regist_mob");
        var second = $(".empty_bl");
        $(window).resize(function() {
            var i = $(".regist_mob, .empty_bl").index(first);
            if ($(window).width() <= "580" && !i) {
                var a = $("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            } else if ($(window).width() > "580" && i) {
                var a = $("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            }
        }).resize()
    });

    // -------------------------------------- аккардеон
    $(".openHidd_info").on("click", function(event){
        event.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.hidden_answer').slideUp(400);
            $(".openHidd_info i").removeClass("act_arrow").addClass("def_arrow");
        }else{
            $(".openHidd_info i").removeClass("act_arrow").addClass("def_arrow");
            $(this).find("i").removeClass("def_arrow").addClass("act_arrow");
            $(".openHidd_info").removeClass("active");
            $(this).addClass("active");
            $('.hidden_answer').slideUp(400);
            $(this).siblings('.hidden_answer').slideDown(400);
        }
    });


    $('.slider_keys').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '0',
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });
    $('.slider_reviews').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true
          }
        }
      ]

    });
    $('.slider_foto').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });


});
