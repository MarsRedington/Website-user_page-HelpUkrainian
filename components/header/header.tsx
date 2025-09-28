import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/logo";
import "./header.css";

function Header() {
  const [openBurger, setOpenBurgert] = useState(false);

  const hahdlerBurger = () => {
    setOpenBurgert((prev) => (prev = !prev));
  };

  let burgerMenu = openBurger
    ? "/assets/icons/xmark-solid.svg"
    : "/assets/icons/burger.png";

  return (
    <header className={openBurger ? " header headerBurger":"header"}>
      <Logo path="/assets/flag/Flag.png"/>
      <nav>
        <ul className={openBurger ? "headerMenu headerActive" : "headerMenu"}>
          <li className="menuItem" onClick={hahdlerBurger}>
            <NavLink to="/learnmore">Workshops</NavLink>
          </li>
          <li className="menuItem" onClick={hahdlerBurger}>
            <NavLink to="#speakinclub">Speaking Club</NavLink>
          </li>
          <li className="menuItem" onClick={hahdlerBurger}>
            <NavLink to="/#ourStory">Our story</NavLink>
          </li>
          <li className="menuItem" onClick={hahdlerBurger}>
            <NavLink to="/#partner">For partners</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="headerActions">
        <ul className={openBurger ? "actions actionsActive" : "actions"}>
          <li className="lang" style={{ display: "none" }}>
            <a href="#">En</a>
          </li>
          <li className="menuItem login">
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li className="signup menuItem">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger">
        <a href="#" onClick={hahdlerBurger}>
          <img className="burgerIcon" src={burgerMenu} alt="burger"></img>
        </a>
      </div>
    </header>
  );
}

export default Header;
