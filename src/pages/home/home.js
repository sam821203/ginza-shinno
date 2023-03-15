// init Swiper:
import Swiper from "swiper";

export const initHome = [
  // landingPageSwiperReady(),
  test(),
];

function landingPageSwiperReady() {
  var menu = ["Slide 1", "Slide 2", "Slide 3"];
  var mySwiper = new Swiper(".swiper-container", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function test() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return swiper;
}
