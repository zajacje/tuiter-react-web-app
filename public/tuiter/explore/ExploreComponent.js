import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="row align-items-center">
    <div class="col-11 position-relative">
      <div class="wd-explore-search-icon position-absolute">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        type="text"
        placeholder="Search Tuiter"
        class="form-control ps-5 wd-explore-search-bar"
      />
    </div>
    <div class="col-1">
      <a href="explore-settings.html">
        <i class="fa-solid fa-gear fa-2x"></i>
      </a>
    </div>
  </div>

  <ul class="nav nav-tabs mt-2 mb-2">
    <li class="nav-item">
      <a class="nav-link active" href="#"> For You </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"> Trending </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"> News </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" tabindex="-1"> Sports </a>
    </li>
    <li class="d-none d-md-block nav-item">
      <a class="nav-link" href="#" tabindex="-1"> Entertainment </a>
    </li>
  </ul>

  <div class="position-relative">
    <img src="../images/starship.webp" width="100%" />
    <h3
      class="wd-main-caption position-absolute bottom-0 fw-bold"
    >
      SpaceX's Starship
    </h1>
  </div>
    ${PostSummaryList()}
    `;
};
export default ExploreComponent;
