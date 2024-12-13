// LEAVE REQUEST MODAL
let openModalBtn = document.querySelectorAll(".request-btn");
let requestModal = document.querySelector(".request-modal");
let closeMoalBtn = document.getElementById("close-btn");
let overlay = document.getElementById("overlay");

// add classList hidden
const addHidden = () => {
  requestModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// remove classList hidden
const removeHidden = () => {
  requestModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.forEach((item) => {
  item.addEventListener("click", () => {
    removeHidden();
  });
});

closeMoalBtn.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    addHidden();
  }
});
