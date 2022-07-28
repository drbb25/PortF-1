const nav_Menu = document.querySelector(".nav_menu");
const menu = document.querySelector(".main_menu");
const icons = document.querySelector(".main_icons");

nav_Menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
