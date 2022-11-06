import React from "react";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];
  return (
    <div className="list-group">
      <a className="list-group-item" href="/tuiter">
        Tuiter
      </a>
      <a
        className={`list-group-item
                    ${active === "home" || !active ? "active" : ""}`}
        href="/tuiter/home"
      >
        Home
      </a>
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        href="/tuiter/explore"
      >
        Explore
      </a>
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        href="/tuiter/notifications"
      >
        Notifications
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        href="/tuiter/messages"
      >
        Messages
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        href="/tuiter/bookmarks"
      >
        Bookmarks
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        href="/tuiter/lists"
      >
        Lists
      </a>
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        href="/tuiter/profile"
      >
        Profile
      </a>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        href="/tuiter/more"
      >
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
