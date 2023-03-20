// init Swiper:
// import Swiper from "swiper";
// import Swiper, { Navigation, Pagination } from "swiper";
import Swiper from "swiper/bundle";

export const initHome = [homeSwiperReady()];

function homeSwiperReady() {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  const sliders = [
    "01 銀座",
    "02 料理",
    "03 ランチ",
    "04 ドリンク",
    "05 コース",
  ];

  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1800,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + sliders[index] + "</div>";
      },
    },
  });
}
