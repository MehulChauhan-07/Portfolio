// ============= NAVBAR =========//
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("fixed", window.scrollY > 3);
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navItems = document.querySelector(".nav-items");

// Close menu when nav link is clicked
document.querySelectorAll(".nav-items li a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Portfolio Gallery Filter
let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // Remove active class from current active item
    filterContainer.querySelector(".active").classList.remove("active");

    // Add active class to clicked item
    event.target.classList.add("active");

    let filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

// Animate skill bars when they come into view
const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-line");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.getAttribute("aria-valuenow") + "%";
    progressBar.style.width = "0%";

    setTimeout(() => {
      progressBar.style.width = value;
    }, 300);
  });
}

// First run - check if skills section is already in view
const checkInitialView = () => {
  const sectionPosition = skillSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (sectionPosition < screenPosition) {
    showProgress();
    window.removeEventListener("load", checkInitialView);
  }
};

// Run on page load
window.addEventListener("load", checkInitialView);

// Run on scroll
window.addEventListener("scroll", () => {
  const sectionPosition = skillSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (sectionPosition < screenPosition - 100) {
    showProgress();
    // Remove scroll event once animation is triggered
    window.removeEventListener("scroll", showProgress);
  }
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitBtn = document.getElementById("submit-btn");

    // Disable submit button during form submission
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    // Show form status element
    formStatus.classList.remove("hidden");

    // Send form data using Formspree or another form service
    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formStatus.textContent = "Thank you! Your message has been sent.";
          formStatus.classList.add("success");
          contactForm.reset();
        } else {
          response.json().then((data) => {
            if (data.errors) {
              formStatus.textContent = data.errors
                .map((error) => error.message)
                .join(", ");
            } else {
              formStatus.textContent =
                "Oops! There was a problem submitting your form.";
            }
            formStatus.classList.add("error");
          });
        }
      })
      .catch((error) => {
        formStatus.textContent =
          "Oops! There was a problem submitting your form.";
        formStatus.classList.add("error");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.value = "Send Message";

        // Hide status message after some time
        setTimeout(() => {
          formStatus.classList.add("hidden");
          formStatus.classList.remove("success", "error");
          formStatus.textContent = "";
        }, 5000);
      });
  });
}

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");

  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }
});

// Current date for copyright in footer
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.querySelector("footer p");
  if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.textContent = `© ${currentYear} Mehul Chauhan. All rights reserved.`;
  }
});

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

// Modal functionality for portfolio items
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".gallery-item-inner");
  const modalContainer = document.getElementById("portfolio-modal");

  portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.parentElement.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });

  function openProjectModal(projectId) {
    // Fetch project data based on ID
    const project = projectData.find((p) => p.id === projectId);

    if (!project) return;

    // Populate modal with project data
    const modalContent = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${project.title}</h3>
                <div class="project-images">
                    ${project.images
                      .map((img) => `<img src="${img}" alt="${project.title}">`)
                      .join("")}
                </div>
                <div class="project-details">
                    <div class="project-info">
                        <p><strong>Client:</strong> ${project.client}</p>
                        <p><strong>Date:</strong> ${project.date}</p>
                        <p><strong>Category:</strong> ${project.category}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(
                          ", "
                        )}</p>
                    </div>
                    <div class="project-description">
                        <h4>Project Overview</h4>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-links">
                        ${
                          project.liveUrl
                            ? `<a href="${project.liveUrl}" class="btn" target="_blank">View Live</a>`
                            : ""
                        }
                        ${
                          project.githubUrl
                            ? `<a href="${project.githubUrl}" class="btn" target="_blank">GitHub Repo</a>`
                            : ""
                        }
                    </div>
                </div>
            </div>
        `;

    modalContainer.innerHTML = modalContent;
    modalContainer.classList.add("show");

    // Close modal functionality
    document.querySelector(".close-modal").addEventListener("click", () => {
      modalContainer.classList.remove("show");
    });

    // Close when clicking outside the modal
    window.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.remove("show");
      }
    });
  }
});
