document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".sidebar-menu-hamburger");
    const menu = document.querySelector(".sidebar-menu");
  
    menuIcon.addEventListener("click", function () {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
  });