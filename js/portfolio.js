/*==================== PORTFOLIO JS ====================*/
document.addEventListener("DOMContentLoaded", function () {
  // Portfolio filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio__item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Show/hide portfolio items based on filter
      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";

          // Add animation
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0) scale(1)";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px) scale(0.8)";

          // Hide after animation completes
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Portfolio Modal
  const modalLinks = document.querySelectorAll(".portfolio__details-btn");
  const modals = document.querySelectorAll(".portfolio-modal");
  const closeBtns = document.querySelectorAll(".close-modal");

  // Open modal
  modalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetModalId = link.getAttribute("href");
      const targetModal = document.querySelector(targetModalId);

      if (targetModal) {
        targetModal.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal with X button
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".portfolio-modal");
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

  // Close modal when clicking outside
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.classList.contains("show")) {
          modal.classList.remove("show");
          document.body.style.overflow = "auto";
        }
      });
    }
  });

  // Portfolio Slider in Modal
  const initPortfolioSliders = () => {
    // This would be implemented with a library like Swiper.js
    // For simplicity, we're just showing implementation logic here
    console.log("Portfolio sliders initialized");

    // Example for manually implementing a simple slider:
    document.querySelectorAll(".portfolio-slider").forEach((slider) => {
      const slides = slider.querySelectorAll("img");
      let currentSlide = 0;

      // Hide all slides except first
      slides.forEach((slide, index) => {
        if (index !== 0) {
          slide.style.display = "none";
        }
      });

      // Create navigation buttons
      const prevBtn = document.createElement("button");
      prevBtn.classList.add("slider-nav", "prev");
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

      const nextBtn = document.createElement("button");
      nextBtn.classList.add("slider-nav", "next");
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

      slider.appendChild(prevBtn);
      slider.appendChild(nextBtn);

      // Navigation functionality
      prevBtn.addEventListener("click", () => {
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
      });

      nextBtn.addEventListener("click", () => {
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = "block";
      });
    });
  };

  // Initialize portfolio sliders when a modal is shown
  modalLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        initPortfolioSliders();
      }, 300);
    });
  });
});
