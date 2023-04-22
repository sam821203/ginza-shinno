// init Swiper
import Swiper from "swiper/bundle";

export const initMenu = [
  menuSwiperReady(),
];

function menuSwiperReady() {
  var swiper = new Swiper("#menuSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1200,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}