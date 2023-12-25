document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuCheckbox = document.getElementById("nav_check");
  const hamburgerLabel = document.querySelector(".hamburger");
  const nav = document.querySelector("header nav");

  // Toggle mobile menu on hamburger icon click
  hamburgerLabel.addEventListener("click", function () {
    console.log("Before Toggle: ", mobileMenuCheckbox.checked);
    mobileMenuCheckbox.checked = !mobileMenuCheckbox.checked;
    console.log("After Toggle: ", mobileMenuCheckbox.checked);
    toggleMobileMenu();
  });

  // Close mobile menu when a menu item is clicked
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuCheckbox.checked = false;
      toggleMobileMenu();
    });

    event.stopPropagation();

    console.log(mobileMenuCheckbox.checked);
  });

  // Toggle the mobile menu visibility
  function toggleMobileMenu() {
    if (mobileMenuCheckbox.checked) {
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  }

  // console.log(mobileMenuCheckbox.checked);
});
