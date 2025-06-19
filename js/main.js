/*==================== MAIN JS ====================*/
document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("hide");
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav__list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("show");
    });
  });

  // Header scroll class
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Active link based on scroll position
  function highlightActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__link[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav__link[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveLink);

  // Skills Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");

      // Remove active class from all buttons and panes
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add active class to clicked button and target pane
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // Animate skill bars when they come into view
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetWidth =
            entry.target.getAttribute("style") || entry.target.style.width;
          entry.target.style.width = "0%";

          setTimeout(() => {
            entry.target.style.width = targetWidth;
          }, 300);

          observer.unobserve(entry.target);
        }
      });
    }, options);

    skillBars.forEach((bar) => {
      observer.observe(bar);
    });
  };

  animateSkillBars();

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.querySelector(".form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show "sending" status
      formStatus.textContent = "Sending message...";
      formStatus.classList.add("sending");
      formStatus.style.display = "block";

      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.classList.remove("sending");
        formStatus.classList.add("success");
        contactForm.reset();

        // Hide the success message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
          formStatus.classList.remove("success");
        }, 5000);
      }, 2000);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Set current year in footer copyright
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Reveal animations on scroll
  const revealElements = () => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const options = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    reveals.forEach((el) => {
      observer.observe(el);
    });
  };

  // Add reveal classes to elements
  const addRevealClasses = () => {
    // Add to section headers
    document.querySelectorAll(".section__header").forEach((el) => {
      el.classList.add("reveal");
    });

    // Add to service cards
    document.querySelectorAll(".service-card").forEach((el, index) => {
      el.classList.add("reveal");
      el.style.animationDelay = `${0.1 * index}s`;
    });

    // Add to about section
    const aboutImage = document.querySelector(".about__image");
    const aboutText = document.querySelector(".about__text");

    if (aboutImage) aboutImage.classList.add("reveal-left");
    if (aboutText) aboutText.classList.add("reveal-right");

    // Add to portfolio items
    document.querySelectorAll(".portfolio__item").forEach((el) => {
      el.classList.add("reveal-scale");
    });

    // Add to testimonials
    document.querySelectorAll(".testimonial__item").forEach((el) => {
      el.classList.add("reveal");
    });

    // Add to blog cards
    document.querySelectorAll(".blog__card").forEach((el) => {
      el.classList.add("reveal");
    });
  };

  addRevealClasses();
  revealElements();

  // Re-run reveal animations when window resizes
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      revealElements();
    }, 250);
  });
});
