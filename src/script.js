const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-menu");
menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
});
