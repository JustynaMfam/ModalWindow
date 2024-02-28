"use strict";
//storing elements in variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

console.log(openModalBtns);

// opening modal when 3 buttons are clicekd
// class hidden was removed

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", openModal);
}

// functon for closing modal
//class hidden was added
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//closing modal when x button is clicked in modal window
closeModalBtn.addEventListener("click", closeModal);

//closing modal when overlay is clicked
overlay.addEventListener("click", closeModal);

//closing modal with ESC button on keybord (global events - we listen on whole document)
// e- event
//functipon generates object with the event information, so e.g. which key was pressed on keyboard
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  //if the pressed key is ESC and     //if the modal does not contain hidden class then close the modal
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
