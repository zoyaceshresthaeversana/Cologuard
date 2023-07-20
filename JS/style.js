const commercialBtn = document.querySelector("#Commercial");
const hiddenBlock = document.querySelector(".hidden-chart-container ");

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

commercialBtn.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "grid";
  } else {
    hiddenBlock.style.display = "none";
  }
});
