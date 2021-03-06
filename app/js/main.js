//  == jQuery burger-menu ==
$(document).ready(function() {
  $('.section-header__burger-menu').click(function(event) {
    $('.section-header__burger-menu,.navigation-menu__header').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//  == /jQuery burger-menu ==



//  == slider ==
new Swiper('.news-slider',{
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

//  == /slider ==