"use strict";

// about us img float in
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".about-article .article-img");
  if (!imgs.length) return;

  // ensure initial state is painted, then add .show
  requestAnimationFrame(() => {
    imgs.forEach((el, i) => {
      void el.offsetWidth;
      el.classList.add("show");
    });
  });
});

// mobile hamburger menu
const hamburgerButton = document.querySelector(".hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeButton = document.querySelector(".hamburger-menu__close");

hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.add("open");
  hamburgerButton.classList.add("display-none");
});

closeButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("open");
  hamburgerButton.classList.remove("display-none");
});
