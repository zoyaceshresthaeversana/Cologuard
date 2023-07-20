const commercialBtn = document.querySelector("#Commercial");
const hiddenBlock = document.querySelector(".hidden-chart-container ");
const navBar = document.querySelector(".navbar-container-mobile-view");
const navBarIcon = document.querySelector(".navbar-hamburger-icon");

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// navBarIcon.addEventListener("click", () => {
//   if (navBar.style.display === "none") {
//     navBar.style.display = "flex";
//   } else {
//     navBar.style.display = "none";
//   }
// });

commercialBtn.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "grid";
  } else {
    hiddenBlock.style.display = "none";
  }
});
