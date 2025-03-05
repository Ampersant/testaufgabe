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
      // при ширине экрана >= 1400px — 4 слайда
      1400: {
        slidesPerView: 4
      },
      // при ширине экрана >= 1200px — 3 слайда
      1200: {
        slidesPerView: 3
      },
      // при ширине экрана >= 992px — 2 слайда
      992: {
        slidesPerView: 2
      },
      // при ширине экрана < 992px — 1 слайд
      0: {
        slidesPerView: 1
      }
    }
  });
  