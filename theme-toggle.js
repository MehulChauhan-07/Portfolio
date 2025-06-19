// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Set initial theme based on local storage
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
      // Switch to light theme
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark theme
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  });
});
