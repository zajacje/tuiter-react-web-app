import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="/tuiter">
        Tuiter
      </a>
      <a
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        href="home/"
      >
        Home
      </a>
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        href="explore/"
      >
        Explore
      </a>
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        href="notifications/"
      >
        Notifications
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        href="messages/"
      >
        Messages
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        href="bookmarks/"
      >
        Bookmarks
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        href="lists/"
      >
        Lists
      </a>
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        href="profile.html"
      >
        Profile
      </a>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        href="more/"
      >
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
