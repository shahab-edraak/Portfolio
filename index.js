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

const themeToggleBtn = document.querySelectorAll("#theme_toggle");
// state
const pageTheme = localStorage.getItem("theme");
// on mount
pageTheme && document.body.classList.add(pageTheme);
// handlers
const handleTheme = () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.removeItem("theme");
  }
};
// Events
themeToggleBtn.forEach((btn) =>
  btn.addEventListener("click", () => handleTheme())
);
