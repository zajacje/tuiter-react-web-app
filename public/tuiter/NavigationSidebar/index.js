const NavigationSidebar = () => {
  return `
  <div class="list-group">
    <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
    <a class="list-group-item list-group-item-action"
        href="../home.html">
        <i class="fa-solid fa-house-chimney"></i>
      <span class="ps-1 d-none d-xl-inline">Home</span>
    </a>
    <a class="list-group-item list-group-item-action active"
        href="../explore/index.html">
        <i class="fas fa-hashtag"></i>
        <span class="ps-1 d-none d-xl-inline">Explore</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="../notifications.html">
        <i class="fas fa-bell"></i>
        <span class="ps-1 d-none d-xl-inline">Notifications</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="../messages.html">
        <i class="fas fa-envelope"></i>
        <span class="ps-1 d-none d-xl-inline">Messages</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="../bookmarks/index.html">
        <i class="fa-solid fa-bookmark"></i>
        <span class="ps-1 d-none d-xl-inline">Bookmarks</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="../lists/index.html">
        <i class="fa-solid fa-list"></i>
        <span class="ps-1 d-none d-xl-inline">Lists</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="../profile.html">
        <i class="fa-solid fa-user"></i>
        <span class="ps-1 d-none d-xl-inline">Profile</span>
    </a>
    <a class="list-group-item list-group-item-action"
        href="#">
        <i class="fa-solid fa-circle"></i>
        <span class="ps-1 d-none d-xl-inline">More</span>
    </a>
  </div>

      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;

$("#wd-navsidebar").append(`
        ${NavigationSidebar()}
`);
