const PostSummaryItem = (post) => {
  return `
  <li class="list-group-item">
    <div class="row">
      <div class="col-10">
        ${post.topic ? `<div class="text-secondary">${post.topic}</div>` : ""}
        <div class="fw-bolder">
          ${post.userName}<i class="fa-solid fa-circle-check ${
    post.userName && `ps-2`
  } pe-1"></i>
          <span class="text-secondary fw-normal"> - ${post.time}</span>
        </div>
        <div class="fw-bolder">
          ${post.title}
        </div>
        ${post.tweets ? `<div class="text-secondary">${post.tweets}</div>` : ""}
      </div>
      <div class="col-2">
        <img
          class="float-end wd-tuit-img"
          src=${post.image}
          height="85px"
          width="85px"
        />
      </div>
    </div>
  </li>`;
};

export default PostSummaryItem;
