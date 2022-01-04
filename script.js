"use strict";

const btnsOpenCloseModal = document.querySelectorAll(".btn-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// MODAL WINDOW

const openCloseModal = function (e) {
  e.preventDefault();
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnsOpenCloseModal.forEach((element) => {
  element.addEventListener("click", openCloseModal);
});
