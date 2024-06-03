const firstProject = document.getElementById("first");
const secondProject = document.getElementById("second");
const thirdProject = document.getElementById("third");
const projectImage = document.getElementById("project-image");

const projects = [firstProject, secondProject, thirdProject];

const projectImages = {
  first: "assets/project_1.jpg",
  second: "assets/image@2x.png",
  third: "assets/project_2.png",
};

function handleClick(event) {
  // remove the 'active' class from all projects
  projects.forEach((project) => project.classList.remove("actives"));

  const clickedProject = event.currentTarget;
  clickedProject.classList.add("actives");

  // Update the image source based on the clicked project
  const projectId = clickedProject.id;
  console.log(projectId);
  projectImage.src = projectImages[projectId];
}

// Add event listeners to all projects
projects.forEach((project) => project.addEventListener("click", handleClick));
