/*==================== THEME SWITCH ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("checkbox");
  const body = document.body;

  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeSwitch.checked = true;
  } else if (savedTheme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeSwitch.checked = false;
  } else if (prefersDarkScheme) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    themeSwitch.checked = false;
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeSwitch.checked = true;
  }

  // Toggle theme when switch is clicked
  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");

      // Animate theme change
      animateThemeTransition("light");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");

      // Animate theme change
      animateThemeTransition("dark");
    }
  });

  // Animation for theme transition
  function animateThemeTransition(newTheme) {
    // Create transition overlay
    const overlay = document.createElement("div");
    overlay.className = "theme-transition-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor =
      newTheme === "light" ? "#ffffff" : "#121212";
    overlay.style.zIndex = "9999";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";
    overlay.style.pointerEvents = "none";

    document.body.appendChild(overlay);

    // Fade in
    setTimeout(() => {
      overlay.style.opacity = "0.3";
    }, 10);

    // Fade out
    setTimeout(() => {
      overlay.style.opacity = "0";
    }, 300);

    // Remove overlay
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 600);
  }

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";

      // Only apply if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        if (newTheme === "dark") {
          body.classList.add("dark-theme");
          body.classList.remove("light-theme");
          themeSwitch.checked = false;
        } else {
          body.classList.remove("dark-theme");
          body.classList.add("light-theme");
          themeSwitch.checked = true;
        }
      }
    });
});
