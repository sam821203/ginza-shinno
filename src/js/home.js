// init Swiper:
// import Swiper from "swiper";
// import Swiper, { Navigation, Pagination } from "swiper";
import Swiper from "swiper/bundle";

export const initHome = [
  homeSwiperReady(),
  scrollHeader(),
  toggleMenu(),
  stopEappsLinkTimer(),
  // initMap(),
  // window.addEventListener("DOMContentLoaded", loadGoogleSyndication),
  // window.addEventListener("DOMContentLoaded", initMap),
];

function homeSwiperReady() {
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

// 隱藏 eapps-link
function hideEappsLink() {
  const eappsLink = document.querySelector(".eapps-link");
  eappsLink.style.display = "none";
}

const timer = setTimeout(hideEappsLink, 1000);

var eappsLinkTimer;

function exeEappsLinkTimer() {
  eappsLinkTimer = setTimeout(function () {
    const eappsLink = document.querySelector(".eapps-link");
    eappsLink.style.display = "none";
  }, 1500);
}

function stopEappsLinkTimer() {
  clearTimeout(eappsLinkTimer);
}

function loadGoogleSyndication() {
  // const googleSyndication = document.createElement("script");
  // googleSyndication.type = "text/javascript";
  // googleSyndication.async = true;
  // googleSyndication.src =
  //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdW_2w4vvqv2Z1uNWQv3xbGt-oZyMQSGA&callback=initMap";
  const script = document.getElementsByTagName("script")[2];
  const scriptParent = script.parentNode;
  scriptParent.insertAdjacentHTML(
    "beforeend",
    "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdW_2w4vvqv2Z1uNWQv3xbGt-oZyMQSGA&callback=initMap' async defer></script>"
  );
}

function scrollHeader() {
  const header = document.getElementById("header");
  const headerLeft = document.getElementById("headerLeft");
  const headerMiddleItems = document.getElementById("headerMiddleItems");
  const headerMiddleImg = document.getElementById("headerMiddleImg");
  const headerRight = document.getElementById("headerRight");
  const menuItems = document.querySelector(".menu__items");

  const scrollHeight = 120;
  window.addEventListener("scroll", () => {
    const isScrolled = window.pageYOffset > scrollHeight;

    header.classList.toggle("header__scroll", isScrolled);
    menuItems.classList.remove("menu__items--active");
    headerMiddleItems.style.opacity = isScrolled ? 0 : 1;
    headerLeft.style.opacity = isScrolled ? 1 : 0;
    headerLeft.style.pointerEvents = isScrolled ? "auto" : "none";
    headerRight.style.opacity = isScrolled ? 1 : 0;
    headerRight.style.pointerEvents = isScrolled ? "auto" : "none";
    headerMiddleImg.style.opacity = isScrolled ? 1 : 0;
  });
}

function toggleMenu() {
  const headerBox = document.getElementById("headerBox");
  const headerMenu = document.getElementById("headerMenu");

  headerBox.addEventListener("click", () => {
    headerMenu.classList.toggle("menu__items--active");
  });
}
