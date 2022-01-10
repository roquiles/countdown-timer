"use strict";

// ELEMENTS
const btnsOpenCloseModal = document.querySelectorAll(".btn-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnStart = document.getElementById("btn-submit");

const sectionOpening = document.querySelector(".main-div");
const sectionClock = document.querySelector(".div-clock");

const inputFields = document.querySelectorAll(".input-event");
const inputName = document.getElementById("event-name");
const inputDate = document.getElementById("event-date");
const inputTime = document.getElementById("event-time");
const eventName = document.querySelector(".name");
const nameWarn = document.getElementById("name-warning");
const dateWarn = document.getElementById("date-warning");

const clock = document.querySelectorAll(".clock");

// MODAL WINDOW

const toggleModal = function (e) {
  e.preventDefault();
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  resetModal();
};

btnsOpenCloseModal.forEach((element) => {
  element.addEventListener("click", openCloseModal);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// COUNTDOWN TIMER FEATURE
const now = new Date();

function startCountdownTimer(futureDate) {
  const now = new Date();
  // Set the initial time
  let timeLeft = futureDate - now;

  // Call the timer every second
  setInterval(function () {
    let days = timeLeft / (1000 * 60 * 60 * 24);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;

    let clockLabel = [days, hours, minutes, seconds];

    // In each call, print the remaining time to UI
    clock.forEach((el, i) => {
      el.textContent = `${Math.trunc(clockLabel[i])}`;
    });

    // Decrease 1s
    timeLeft -= 1000;
  }, 1000);
}

function resetModal() {
  inputFields.forEach((el) => (el.value = ""));

  if (
    !nameWarn.classList.contains("hidden") ||
    !dateWarn.classList.contains("hidden")
  ) {
    nameWarn.classList.add("hidden");
    dateWarn.classList.add("hidden");
  }
}

// DISPLAYING THE COUNTDOWM TIMER
btnStart.addEventListener("click", function (e) {
  e.preventDefault(e);

  // Checking event name
  if (!inputName.value) {
    nameWarn.classList.remove("hidden");
    return;
  }

  // Creating the future date
  const [year, month, day] = inputDate.value.split("-");
  const [hour = "0", min = "0"] = inputTime.value.split(":");
  let futureDate = new Date(year, month - 1, day, hour, min);

  // Checking event date
  if (futureDate <= now || isNaN(futureDate.getFullYear())) {
    dateWarn.classList.remove("hidden");
    return;
  } else {
    // Filling the clock section
    eventName.textContent = inputName.value;
    startCountdownTimer(futureDate);

    // Showing the countdown timer section
    sectionClock.classList.remove("hidden");

    // Hiding the opening section
    if (!sectionOpening.classList.contains("hidden")) {
      sectionOpening.classList.add("hidden");
    }

    // Reset modal window input fields
    resetModal();
    openCloseModal();
  }

  // console.log(futureDate);
});
