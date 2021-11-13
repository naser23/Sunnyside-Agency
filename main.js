"use strict";
// global variables //
const hamburgerButton = document.querySelector(".hamburger-menu-button");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
console.log(hamburgerIcon);
const creativesArea = document.querySelector(".creatives-area");
const popupMenu = document.querySelector(".popup-menu-area");
let isOpen = false;

hamburgerButton.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  if (isOpen == false) {
    creativesArea.style.display = "none";
    popupMenu.style.display = "flex";
    isOpen = true;
  } else if (isOpen == true) {
    creativesArea.style.display = "flex";
    popupMenu.style.display = "none";
    isOpen = false;
  }
}
