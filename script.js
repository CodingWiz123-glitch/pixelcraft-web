const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Keep the footer year up to date automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
// Show a message when the logo is clicked.
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  alert("Welcome to PixelCraft Web!");
});