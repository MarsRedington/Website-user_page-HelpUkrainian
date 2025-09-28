import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../presentationSlider/presentationSlider";
import "./presentation.css";

function Presentation() {
  return (
    <div className="presentation">
      <Slider />
      <div className="buttonsBlock">
        <div className="buttons">
          <div className="join">
            <NavLink to="https://t.me/+lOYGL_jfJ3tmYzZh">Join now</NavLink>
          </div>
          <div className="learn">
            <NavLink to="/learnmore">Learn more</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
