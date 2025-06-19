// Skills Section JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Tab Functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      // Remove active class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add active class to clicked button and target pane
      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // Project filtering from skills section
  const techProjectLinks = document.querySelectorAll(".tech-project-link");

  techProjectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const technology = link.getAttribute("data-filter");
      const portfolioSection = document.getElementById("portfolio");

      // Scroll to portfolio section
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: "smooth",
      });

      // Activate the corresponding filter in the portfolio section
      setTimeout(() => {
        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach((button) => {
          if (button.getAttribute("data-filter") === technology) {
            button.click();
          }
        });
      }, 800);
    });
  });

  // Skill card animations on scroll
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Apply a staggered animation delay
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, 100 * (index % 6));

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  skillCards.forEach((card) => {
    observer.observe(card);
  });
});
