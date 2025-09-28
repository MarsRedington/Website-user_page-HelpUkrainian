import React from "react";
import SideBar from "../../components/personalPageComponents/sideBar/sideBar";
import TeamComponent from "../../components/personalPageComponents/teamComponents/teamComponent";
import "./personalTeam.css";

function PersonalTeam() {
  return (
    <main className="personalTeam">
      <SideBar />
      <TeamComponent />
    </main>
  );
}

export default PersonalTeam;
