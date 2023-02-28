"use strict";

const showModals = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// O método querySelectorAll é utilizado para retornar todos os elementos que pertencem a uma dada classe e não só o primeiro, como faria o método querySelector.

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModals.length; i++) {
  showModals[i].addEventListener("click", openModal);
}

const funcCloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModal.addEventListener("click", funcCloseModal);
overlay.addEventListener("click", funcCloseModal);
