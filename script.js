const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");

navMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
});


