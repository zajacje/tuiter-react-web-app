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
        <span className="d-none d-xl-inline">Tuiter</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        to="/tuiter/home"
      >
        <i className="bi bi-house-door-fill pe-2"></i>
        <span className="d-none d-xl-inline">Home</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        to="/tuiter/explore"
      >
        <i className="bi bi-hash pe-2"></i>
        <span className="d-none d-xl-inline">Explore</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "labs" ? "active" : ""}`}
        to="/"
        end
      >
        <i className="bi bi-asterisk pe-2"></i>
        <span className="d-none d-xl-inline">Labs</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        to="/tuiter/notifications"
      >
        <i className="bi bi-bell pe-2"></i>
        <span className="d-none d-xl-inline">Notifications</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        to="/tuiter/messages"
      >
        <i className="bi bi-envelope pe-2"></i>
        <span className="d-none d-xl-inline">Messages</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        to="/tuiter/bookmarks"
      >
        <i className="bi bi-bookmark pe-2"></i>
        <span className="d-none d-xl-inline">Bookmarks</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        to="/tuiter/lists"
      >
        <i className="bi bi-card-text pe-2"></i>
        <span className="d-none d-xl-inline">Lists</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        to="/tuiter/profile"
      >
        <i className="bi bi-person pe-2"></i>
        <span className="d-none d-xl-inline">Profile</span>
      </NavLink>
      <NavLink
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        to="/tuiter/more"
      >
        <i className="bi bi-three-dots pe-2"></i>
        <span className="d-none d-xl-inline">More</span>
      </NavLink>
    </div>
  );
};
export default NavigationSidebar;
