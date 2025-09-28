import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarMenu.css";

function SidebarMenu() {
  return (
    <div className="sidebarMenu">
      <ul>
        <li className="sidemenuItem">
          <NavLink to="/personalPage/events" className="sideBarLink">
            <img src="/assets/icons/events.png" alt="events" />
            <span>My events</span>
          </NavLink>
        </li>
        <li className="sidemenuItem">
          <NavLink to="/personalPage/team" className="sideBarLink">
            <img src="/assets/icons/team.png" alt="team" />
            <span>Team</span>
          </NavLink>
        </li>
        <li className="sidemenuItem">
          <NavLink to="/personalPage/profile" className="sideBarLink">
            <img src="/assets/icons/profile.png" alt="profile" />
            <span>My profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
