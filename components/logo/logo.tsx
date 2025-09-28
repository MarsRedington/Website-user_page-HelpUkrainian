import React from "react";
import { NavLink } from "react-router-dom";
import "./logo.css";

function Logo({ path }: { path: string }) {
  return (
    <div className="menuLogo">
      <div className="logo">
        <NavLink className="logo" to="/">
          <img src={path} alt="Logo" />
        </NavLink>
      </div>
      <div className="logoText">
        <p className="logoTitle">Help Ukrainian</p>
        <p className="titleArea">Job Aid Volunteer Network</p>
      </div>
    </div>
  );
}

export default Logo;
