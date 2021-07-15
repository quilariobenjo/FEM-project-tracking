const button = document.querySelector(".btn--menu");
const navMenu = document.querySelector(".navbar__menu");
const icon = document.querySelector(".navbar__icon");

button.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    icon.src = "./images/icon-close.svg";
    button.setAttribute("aria-expanded", true);
  } else {
    icon.src = "./images/icon-hamburger.svg";
    button.setAttribute("aria-expanded", false);
  }
});
