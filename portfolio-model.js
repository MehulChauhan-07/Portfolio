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
