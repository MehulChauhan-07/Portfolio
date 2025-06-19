/*==================== TESTIMONIAL SLIDER ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const testimonialSlider = document.querySelector(".testimonial__slider");

  if (!testimonialSlider) return;

  const testimonials = testimonialSlider.querySelectorAll(".testimonial__item");
  const prevBtn = document.querySelector(".testimonial__arrow.prev");
  const nextBtn = document.querySelector(".testimonial__arrow.next");
  const dotsContainer = document.querySelector(".testimonial__dots");

  let currentSlide = 0;

  // Create dots for each testimonial
  testimonials.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("testimonial__dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  // Get all dots
  const dots = dotsContainer.querySelectorAll(".testimonial__dot");

  // Hide all testimonials except the first one
  testimonials.forEach((testimonial, index) => {
    if (index !== 0) {
      testimonial.style.display = "none";
    }
  });

  // Function to show a specific slide
  function goToSlide(slideIndex) {
    // Hide current slide
    testimonials[currentSlide].style.display = "none";
    dots[currentSlide].classList.remove("active");

    // Show new slide
    currentSlide = slideIndex;
    testimonials[currentSlide].style.display = "flex";
    testimonials[currentSlide].style.animation = "fadeIn 0.5s ease forwards";
    dots[currentSlide].classList.add("active");
  }

  // Previous button functionality
  prevBtn.addEventListener("click", () => {
    const newIndex =
      (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(newIndex);
  });

  // Next button functionality
  nextBtn.addEventListener("click", () => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    goToSlide(newIndex);
  });

  // Auto-advance slides every 5 seconds
  let slideInterval = setInterval(() => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    goToSlide(newIndex);
  }, 5000);

  // Pause auto-advance when hovering over the slider
  testimonialSlider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  // Resume auto-advance when mouse leaves the slider
  testimonialSlider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      const newIndex = (currentSlide + 1) % testimonials.length;
      goToSlide(newIndex);
    }, 5000);
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Only if testimonial is in view
    const rect = testimonialSlider.getBoundingClientRect();
    const isInView =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth;

    if (!isInView) return;

    if (e.key === "ArrowLeft") {
      const newIndex =
        (currentSlide - 1 + testimonials.length) % testimonials.length;
      goToSlide(newIndex);
    } else if (e.key === "ArrowRight") {
      const newIndex = (currentSlide + 1) % testimonials.length;
      goToSlide(newIndex);
    }
  });
});
