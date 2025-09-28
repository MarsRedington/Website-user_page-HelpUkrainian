import React from "react";
import { team } from "../../data/team";
import "./team.css";

function Team() {
  return (
    <div className="team">
      <div className="teamContainer">
        <h2>Meet our team</h2>
        <div className="teamList">
          { team.map((item, idx) => (
            <div className="teamItem" key={idx}>
              <div className="photoItem">
                <img src={ item.pathFoto } alt={ item.name }></img>
              </div>
              <div className="descriptionItem">
                <h3>{ item.name }</h3>
                <p>{ item.job }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
