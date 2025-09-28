import React from "react";
import { activities } from "../../data/activities";
import "./activities.css";

function Activities() {
  return (
    <div className="activities">
      {activities.map((item, idx) => (
        <div className="activitesItem" key={idx}>
          <div className="itemImg">
            <img className="activitiesImg" src={item.imgPath} alt="foto"></img>
          </div>
          <div className="itemText">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Activities;
