// 載入 SCSS 樣式表
import "./app.sass";

/**
 * plugin js file
 */
import "./vendors/js/axios";
import "swiper/swiper-bundle.css";

// import "./vendors/js/swiper";

// import "./vendors/js/swiper-bundle.esm.browser.min.js";

// import "./pages/home/home";
import { initHome } from "./js/home";

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

// setTimeout(initMap, 4000);
