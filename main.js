document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data for the projects
  fetch("project.json")
    .then((response) => response.json()) // Parse the JSON data
    .then((data) => {
      // Get the container element where the projects will be displayed
      const projectSection = document.querySelector(".grid-project-section");

      // Function to create and return a project card HTML string
      function createProjectCard(project) {
        return `
              <article class="project-card">
                  <h2 class="project-h2">Name: ${project.name}</h2>
                  <p>Description: ${project.description}</p>
                  <p>Status: ${project.status}</p>
                  <img src="${project.image}" alt="project-img" class="portfolio-image" />
              </article>
          `;
      }

      // Generate HTML for each project and append it to the container
      data.projects.forEach((project) => {
        projectSection.innerHTML += createProjectCard(project);
      });
    })
    .catch((error) => console.error("Error loading projects data:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data for additional projects
  fetch("project.json")
    .then((response) => response.json()) // Parse the JSON data
    .then((data) => {
      // Get the container element where the additional projects will be displayed
      const projectSection = document.querySelector(".my-project");

      // Function to create and return a project card HTML string
      function createProjectCard(project) {
        return `
              <article class="project-card">
                  <p>${project.name}</p>
                  <p>${project.description}</p>
                  <p>${project.status}</p>
                  <img src="${project.image}" alt="project-img" style="width: 300px; height: auto" />
                  <a href="${project.githubLink}"><button class="button-dark">Project on Github</button></a>
              </article>
          `;
      }

      // Generate HTML for each project and append it to the container
      data.additionalProjects.forEach((project) => {
        projectSection.innerHTML += createProjectCard(project);
      });
    })
    .catch((error) =>
      console.error("Error loading additional projects data:", error)
    );
});
