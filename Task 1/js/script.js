document.addEventListener("DOMContentLoaded", () => {
  const navCheck = document.getElementById("nav_check");
  const hamburgerLabel = document.querySelector(".hamburger");
  const nav = document.querySelector("header nav");

  navCheck.checked = false;

  // Toggle mobile menu on hamburger icon click
  hamburgerLabel.addEventListener("click", () => {
    navCheck.checked = !navCheck.checked;
    toggleMobileMenu();
  });

  // Close mobile menu when a menu item is clicked
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navCheck.checked = false;
      toggleMobileMenu();
    });
  });

  // Toggle the mobile menu visibility
  function toggleMobileMenu() {
    if (navCheck.checked) {
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  }
});
