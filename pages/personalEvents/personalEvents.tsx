import React from "react";
import SideBar from "../../components/personalPageComponents/sideBar/sideBar";
import EventsComponents from "../../components/personalPageComponents/eventsComponent/eventsComponent";
import "./personalEvents.css";

function PersonalEvents() {
  return (
    <main className="personalEvents">
      <SideBar />
      <EventsComponents />
    </main>
  );
}

export default PersonalEvents;
