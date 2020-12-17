projectsContainer = document.getElementById("projects-container");

function getTagStyle(tag) {
  if (tag == "Freelance" || tag == "Personal") {
    return "dark";
  } else if (tag == "HTML") {
    return "dark bg-orange";
  } else if (tag == "CSS") {
    return "primary";
  } else if (tag == "JavaScript") {
    return "warning";
  } else if (tag == "Bootstrap") {
    return "dark bg-sec";
  }
}

function formatTags(tags) {
  let tagsSection = "";
  for (const tag of tags) {
    tagsSection += `<span class="mr-1 badge badge-${getTagStyle(tag)}">${tag}</span>`;
  }
  return tagsSection
}

function makeProjectTemplate(project) {
  return `
    <div class="card p-0 mb-3 mx-3">
      <img src="${project.img}" class="card-img-top border-bottom" alt="">
      <div class="card-body">
        <h3 class="alt-font card-title mb-0">${project.title}</h3>
        <p class="card-text mb-0">
          ${formatTags(project.tags)}
        </p>
        <p class="card-text mb-0">
          <small class="text-muted">${project.date}</small>
        </p>
        <p class="card-text">${project.description}</p>
          <a href="${project.url}" target=”_blank” class="btn btn-dark bg-sec border-sec">Go to page</a>
      </div>
    </div>`;
}

let projectsFragment = document.createDocumentFragment();

for (const project of projects) {
  projectTemplate = makeProjectTemplate(project);
  let article = document.createElement("article");
  article.classList.add('col','p-0')
  article.innerHTML = projectTemplate;
  projectsFragment.appendChild(article);
}

projectsContainer.appendChild(projectsFragment);