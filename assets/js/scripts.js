window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  let navbarShrink = () => {
    const shrinkableNavbar = document.body.querySelector("#mainNavBar");
    if (!shrinkableNavbar) {
      return;
    }
    if (window.scrollY === 0) {
      shrinkableNavbar.classList.remove("navbar-shrink");
    } else {
      shrinkableNavbar.classList.add("navbar-shrink");
    }
  };

  // Shrink
  navbarShrink();

  // Shrink the navbar on scroll
  document.addEventListener("scroll", navbarShrink);
});
