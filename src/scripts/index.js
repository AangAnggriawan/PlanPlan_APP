import "flowbite";
import "../styles/index.css";
import App from "../views/app";

const app = new App({ content: document.querySelector(".content") });
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen dengan kelas 'menu-item'
  var menuItems = document.querySelectorAll(".menu-item");

  // Tambahkan event listener untuk setiap elemen menu
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua elemen menu
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });

      // Tambahkan kelas 'active' ke elemen menu yang diklik
      item.classList.add("active");
    });
  });
});
