const WhoToFollowListItem = (who) => {
  return `
  <li class="list-group-item ps-1 pe-1 ps-xl-3 pe-xl-3">
    <div class="row">
      <div class="col-auto pe-0 align-self-center">
        <img
          src=${who.avatarIcon}
          class="rounded-circle wd-follow-img"
        />
      </div>
      <div class="col-6 col-xl-7 pe-1 ps-1 ps-xl-2 align-self-center">
        <span class="fw-bold">
        ${who.userName}
        <i class="fa-solid fa-circle-check"></i>
        </span>
        <div class="text-secondary">@${who.handle}</div>
      </div>
      <div class="col-3 col-xl-3 pe-0 ps-0 align-self-center">
        <button class="btn btn-primary w-100 mt-1 rounded-pill">
          Follow
        </button>
      </div>
    </div>
  </li>
  `;
};

export default WhoToFollowListItem;
