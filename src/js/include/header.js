// init Swiper:
import Swiper from "swiper/bundle";
export const initHeader = [scrollHeader(), toggleMenu()];

function scrollHeader() {
  const header = document.getElementById("header");
  const headerLeft = document.getElementById("headerLeft");
  const headerMiddleItems = document.getElementById("headerMiddleItems");
  const headerMiddleImg = document.getElementById("headerMiddleImg");
  const headerRight = document.getElementById("headerRight");
  const menuItems = document.querySelector(".menu__items");

  const scrollHeight = 120;

  if (window.innerWidth > 960) {
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
}

function toggleMenu() {
  const headerBox = document.getElementById("headerBox");
  const headerMenu = document.getElementById("headerMenu");
  headerBox.addEventListener("click", () => {
    console.log(headerMenu);

    headerMenu.classList.toggle("menu__items--active");
  });
}
