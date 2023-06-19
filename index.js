let theme = "dark";

// Mob Nav Close/open Function
function mobileNav() {
  const headerBtn = document.querySelector(".header__bars");
  const mobNav = document.querySelector(".mobile_nav");
  const mobNavLinks = document.querySelectorAll(".mobile_nav-link");

  // state
  let isMobNavOpen = false;
  headerBtn.addEventListener("click", () => {
    isMobNavOpen = !isMobNavOpen;
    if (isMobNavOpen) {
      mobNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
  mobNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobNavOpen = "false";
      mobNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
}
mobileNav();

function scrollToTop() {
  window.scroll(100, 100);
}
function ChangeTheme() {
  const root_theme = document.querySelector(":root");
  if (theme === "dark") {
    root_theme.style.setProperty("--clr-dark", "#ffffff");
    theme = "light";
  } else {
    root_theme.style.setProperty("--clr-dark", "#070a13");
    theme = "dark";
  }
}
