// init Swiper
import Swiper from "swiper/bundle";

export const initMenu = [
  menuSwiperReady(),
];

function menuSwiperReady() {
  let sliders;
  if (window.innerWidth > 960) {
    sliders = ["01 銀座", "02 料理", "03 ランチ", "04 ドリンク", "05 コース"];
  } else {
    sliders = ["•", "•", "•", "•", "•"];
  }

  var swiper = new Swiper("#menuSwiper", {
    centeredSlides: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    // speed: 600,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<div class="' + className + '">' + sliders[index] + "</div>";
      // },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}