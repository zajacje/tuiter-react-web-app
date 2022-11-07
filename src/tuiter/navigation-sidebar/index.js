import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];
  return (
    <div className="list-group">
      <NavLink
        className={`list-group-item
                    ${!active ? "active" : ""}`}
        to="/tuiter"
        end
      >
        Tuiter
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        to="/tuiter/home"
      >
        Home
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        to="/tuiter/explore"
      >
        Explore
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        to="/tuiter/notifications"
      >
        Notifications
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        to="/tuiter/messages"
      >
        Messages
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        to="/tuiter/bookmarks"
      >
        Bookmarks
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        to="/tuiter/lists"
      >
        Lists
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        to="/tuiter/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        to="/tuiter/more"
      >
        More
      </NavLink>
    </div>
  );
};
export default NavigationSidebar;
