/* 
  Implementation of Swiper object
*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      // Screen width  >= 1400px — 4 Slides
      1400: {
        slidesPerView: 4
      },
      // Screen width >= 1200px — 3 Slides
      1200: {
        slidesPerView: 3
      },
      // Screen width >= 992px — 2 Slides
      992: {
        slidesPerView: 2
      },
      // Screen width < 992px — 1 Slide
      0: {
        slidesPerView: 1
      }
    }
  });
  