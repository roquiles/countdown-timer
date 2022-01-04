"use strict";

const btnOpenModal = document.querySelectorAll(".btn-open-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// MODAL WINDOW

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenModal.forEach((element) => {
  element.addEventListener("click", openModal);
});
