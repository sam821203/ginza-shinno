// init Swiper
import Swiper from "swiper/bundle";

export const initHome = [
  homeSwiperReady(),
  // stopEappsLinkTimer(),
  // window.addEventListener("DOMContentLoaded", loadGoogleSyndication),
  // window.addEventListener("DOMContentLoaded", initMap),
];

function homeSwiperReady() {
  let sliders;
  if (window.innerWidth > 960) {
    sliders = ["01 銀座", "02 料理", "03 ランチ", "04 ドリンク", "05 コース"];
  } else {
    sliders = ["•", "•", "•", "•", "•"];
  }

  var swiper = new Swiper("#heroSwiper", {
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
var eappsLinkTimer;

function exeEappsLinkTimer() {
  eappsLinkTimer = setTimeout(function () {
    const eappsLink = document.querySelector(".eapps-link");
    eappsLink.style.display = "none";
  }, 2000);
}

// exeEappsLinkTimer();

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
