(function($) {

  var TIMEZONE = 'Europe/Moscow';

  $('.s-promo-v2 .timer').each(function() {

    var $this = this;

    function zeroPad(num, length) {
      return (Array(length).join('0') + num).slice(-length);
    };

    var x = setInterval(function() {

      var NOW = moment.tz(TIMEZONE);

      var eventDate = moment.tz(TIMEZONE)
        //.add(1, 'days')
        .set('hour', 19)
        .set('minute', 20)
        .set('second', 0)
      ;
      var distance = moment(eventDate).valueOf() - moment(NOW).valueOf();

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $('.days', $this).html(zeroPad(days, 2));
      $('.hours', $this).html(zeroPad(hours, 2));
      $('.minutes', $this).html(zeroPad(minutes, 2));
      $('.seconds', $this).html(zeroPad(seconds, 2));

      if (distance < 0) {
        clearInterval(x);
        $($this).remove();
      }

    }, 1000);

  });

})(jQuery);
