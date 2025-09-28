import React from "react";
import SideBar from "../../components/personalPageComponents/sideBar/sideBar";
import ProfileComponent from "../../components/personalPageComponents/profileComponent/profileComponent";
import "./personalProfile.css";

function PersonalProfile() {
  return (
    <main className="personalProfile">
      <SideBar />
      <ProfileComponent />
    </main>
  );
}

export default PersonalProfile;
