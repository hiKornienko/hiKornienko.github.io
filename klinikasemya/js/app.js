/* Template Name: Brieper - Responsive Landing Template
   Author: Shreethemes
   Email: shreethemes@gmail.com
   Website: http://www.shreethemes.in
   Version: 1.1.0
   Updated: December 2019
   File Description: Main JS file of the template
*/

! function($) {
    "use strict";
    // Back to top
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });
    //Slider
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            }
        ]
    });
}(jQuery)


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
