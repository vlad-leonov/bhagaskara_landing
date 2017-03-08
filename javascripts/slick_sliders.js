$(document).ready(function(){
    // Testimonials slider
    var $slickTstSlider = $('.tst-slider');
    var $tstDots = $('.tst-slider-indicators');

    $('.tst-slider').slick({
      dots: true,
      appendDots: $tstDots,
      arrows: false,
      speed: 400,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
      slidesToShow: 1,
    });

    // Team carousel
    var $slickTeamCarousel = $('.team-carousel');

    $slickTeamCarousel.slick({
        dots: false,
        speed: 400,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 20000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.carousel-prev'),
        nextArrow: $('.carousel-next'),
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
