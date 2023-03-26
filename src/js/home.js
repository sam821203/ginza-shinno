// init Swiper:
// import Swiper from "swiper";
// import Swiper, { Navigation, Pagination } from "swiper";
import Swiper from "swiper/bundle";

export const initHome = [
  homeSwiperReady(),
  scrollHeader(),
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

// var map;
// function initMap() {
//   // var position = {
//   //   lat: 25.0339031,
//   //   lng: 121.5623212,
//   // };
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: {
//       lat: 25.0336962,
//       lng: 121.5643673,
//     },
//     styles: [
//       {
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#212121",
//           },
//         ],
//       },
//       {
//         elementType: "labels.icon",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#757575",
//           },
//         ],
//       },
//       {
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             color: "#212121",
//           },
//         ],
//       },
//       {
//         featureType: "administrative",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#757575",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.country",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#9e9e9e",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#bdbdbd",
//           },
//         ],
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#757575",
//           },
//         ],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#181818",
//           },
//         ],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#616161",
//           },
//         ],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             color: "#1b1b1b",
//           },
//         ],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.fill",
//         stylers: [
//           {
//             color: "#2c2c2c",
//           },
//         ],
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#8a8a8a",
//           },
//         ],
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#373737",
//           },
//         ],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#3c3c3c",
//           },
//         ],
//       },
//       {
//         featureType: "road.highway.controlled_access",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#4e4e4e",
//           },
//         ],
//       },
//       {
//         featureType: "road.local",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#616161",
//           },
//         ],
//       },
//       {
//         featureType: "transit",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#757575",
//           },
//         ],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#000000",
//           },
//         ],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#3d3d3d",
//           },
//         ],
//       },
//     ],
//   });
// }

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

  const scrollHeight = 120;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > scrollHeight) {
      header.classList.add("header__scroll");
      headerMiddleItems.style.opacity = 0;
      headerMiddleImg.style.opacity = 1;
    } else {
      header.classList.remove("header__scroll");
      headerMiddleItems.style.opacity = 1;
      headerMiddleImg.style.opacity = 0;
    }
  });
}
