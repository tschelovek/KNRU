document.addEventListener('DOMContentLoaded', () => {

  /**
   * Инициализация плагинов
   */
  Fancybox.bind('[data-fancybox]', {
    hideScrollbar: false,
  });

  /**
   * Слайдеры
   */

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
   * YANDEX.MAPS API
   */

  if(document.getElementById('map_spb')) {
    ymaps.ready(function () {
      let map = new ymaps.Map("map_spb", {
        center: [59.941748, 30.349499],
        zoom: 15
      });

      let myPlacemark = new ymaps.Placemark([59.941748, 30.349499], {
        draggable: 1,
        hintOptions: {
          maxWidth: 100,
          showTimeout: 200,
          offset: [5,5]
        },
        balloonOptions: {
          maxWidth: 70,
          hasCloseButton: false,
          mapAutoPan: 0
        }
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/marker_YMaps.png',
        iconImageSize: [54, 76],
        iconImageOffset: [-27, -76]
      });

      myPlacemark.name = "KNRU";

      map.behaviors.disable('scrollZoom');

      map.geoObjects.add(myPlacemark);
    });
  }



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
