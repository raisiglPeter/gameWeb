"use strict";

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
