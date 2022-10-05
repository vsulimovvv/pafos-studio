window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  // $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.works__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.works__slider .swiper-button-next',
        prevEl: '.works__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.price-list-top__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      centeredSlides: true,
      slideToClickedSlide: true,
      // initialSlide: 13,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.price-list-top__slider .swiper-button-next',
        prevEl: '.price-list-top__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 90) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  //* Close menu after click on Links
  (function closeMenuAfterClickOnLinks() {
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    const body = document.querySelector('body');

    function linkAction() {
      document.querySelector('.mobile-menu').classList.remove('active');
      document.querySelector('.header__toggle').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
      body.classList.remove('no-scroll');
    }
    menuLinks.forEach((ml) => ml.addEventListener('click', linkAction));
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs('.contacts', '.contacts-top__item', '.contacts__content', 'active');

  // function toggleTabs(
  //   headerSelector,
  //   tabSelector,
  //   contentSelector,
  //   activeClass
  // ) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);

  //   header.forEach((el) => {
  //     if (el) {
  //       hideTabContent();
  //       showTabContent();
  //       function hideTabContent() {
  //         content.forEach((item) => {
  //           item.classList.remove('active');
  //         });
  //         tab.forEach((item) => {
  //           item.classList.remove(activeClass);
  //         });
  //       }
  //       function showTabContent(i = 4) {
  //         content[i].classList.add('active');
  //         tab[i].classList.add(activeClass);
  //       }
  //       header.forEach((item) => {
  //         if (item) {
  //           item.addEventListener('click', (e) => {
  //             const target = e.target;
  //             if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //               tab.forEach((item, i) => {
  //                 if (target == item || target.parentNode == item) {
  //                   hideTabContent();
  //                   showTabContent(i);
  //                 }
  //               });
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // }
  // toggleTabs(
  //   '.price-list',
  //   '.price-list-top__btn',
  //   '.price-list__content',
  //   'active'
  // );

  (function tab() {
    let tabNav = document.querySelectorAll('.price-list-top__btn'),
      tabContent = document.querySelectorAll('.price-list__content'),
      tabName;

    tabContent.forEach((el) => {
      if (el) {
        tabNav.forEach((item) => {
          item.addEventListener('click', selectTabNav);
        });

        function selectTabNav() {
          tabNav.forEach((item) => {
            item.classList.remove('active');
          });
          this.classList.add('active');
          tabName = this.getAttribute('data-tab-name');
          selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
          tabContent.forEach((item) => {
            item.classList.contains(tabName)
              ? item.classList.add('active')
              : item.classList.remove('active');
          });
        }
      }
    });
  })();
});
