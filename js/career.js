function makeCarouselItemTemplate(project) {
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

function fillCarouselInner(carouselId, data) {
  projectsContainer = document.getElementById(carouselId);

  makeCarouselItemTemplate();

  let div = document.createElement("div");
  let projectsFragment = document.createDocumentFragment();

  for (const item of data) {
    projectTemplate = makeCarouselItemTemplate(project);
    let article = document.createElement("article");
    article.classList.add('col','p-0')
    article.innerHTML = projectTemplate;
    projectsFragment.appendChild(article);
  }
  
  projectsContainer.appendChild(projectsFragment);
}

fillCarouselInner("image-gallery-1",education);

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="img/career/engineering.jpg" class="d-block mx-auto" alt="...">
    <div class="carousel-caption d-none d-md-block position-static pb-0 pt-2">
      <p class="mb-0">Mechatronics Engineering "Cum Laude"</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="img/career/asimei.jpg" class="d-block mx-auto" alt="...">
    <div class="carousel-caption d-none d-md-block position-static pb-0 pt-2">
      <p class="mb-0">Highest average in the career of Mechatronic Engineering at Universidad Don Bosco</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="img/career/casas.jpg" class="d-block mx-auto" alt="...">
    <div class="carousel-caption d-none d-md-block position-static pb-0 pt-2">
      <p class="mb-0">Reading and Listening Intermediate English Certification</p>
    </div>
  </div>
</div>
<ol class="carousel-indicators mb-0 position-static">
  <li data-target="#image-gallery-1" data-slide-to="0" class="active"></li>
  <li data-target="#image-gallery-1" data-slide-to="1"></li>
  <li data-target="#image-gallery-1" data-slide-to="2"></li>
</ol>