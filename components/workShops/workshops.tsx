import React from "react";
import "./workshops.css";
import { workshops } from "../../data/worshops";

function Workshops() {
  return (
    <div className="workshops">
      {workshops.map((workshop, idx) => (
        <div className="workshopItem" key={idx}>
          <div className="itemBorder">
            <div className="number">
              <img src={workshop.iconPath} alt="logo"></img>
            </div>
            <div className="decorLine"></div>
          </div>
          <div className="itemDescription">
            <div className="workshopTitle">
              <h2>
                {workshop.number}. {workshop.title}
              </h2>
            </div>
            <div className="workshopText">
              <p>{workshop.description1}</p>
              <p>{workshop.description2}</p>
            </div>
            <div className="registerWorkshop">
              <a href="https://t.me/+lOYGL_jfJ3tmYzZh">Register now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workshops;
