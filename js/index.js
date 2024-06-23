document.addEventListener('DOMContentLoaded', () => {

  /**
   * Инициализация плагинов
   */
  Fancybox.bind('[data-fancybox]', {
    hideScrollbar: false,
  });

  const swiper1 = new Swiper('#slider_projects', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination_callback',
      type: 'bullets',
      clickable: true
    },
    // slidesPerView: 1,
    spaceBetween: 20,
  })

  const swiper2 = new Swiper('#slider_partners', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination_partners',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      440: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  })

  /**
   * ~~МЕЛКИЕ СКРИПТЫ~~
   * =============
   */

  /**
   *
   * Бургер меню
   */
  document.getElementById('burgerButton')?.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    document.querySelector('header .header__menu')?.classList.toggle('active');
    document.querySelector('header')?.classList.toggle('menu-open');
  })

  /**
   * ~~КОНЕЦ МЕЛКИХ СКРИПТОВ~~
   * =============
   */
})
