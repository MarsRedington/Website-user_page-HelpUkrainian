import React, { useState } from "react";
import "./personalPageHeader.css";
import AddEvent from "../addEvent/addEvent";

function PersonalPageHeader() {
  const [addEventlActive, setAddEventlActive] = useState<boolean>(false);

  const closeAddEvent = () => {
    setAddEventlActive(false);
  };

  return (
    <div className="personalPageHeader">
      <div className="pphTitle">
        <h2>All Events</h2>
      </div>
      <div className="pphButtons">
        <button className="addEvent" onClick={() => setAddEventlActive(true)}> Add event +</button>
        <AddEvent active={addEventlActive} onClose={closeAddEvent} />
        <button className="notifications">
        <img src="/assets/icons/notifications.png" alt="notifications"/>
        </button>
        <button className="logout">
            <img src="/assets/icons/logout.png" alt="logout"/>
        </button>
      </div>
    </div>
  );
}

export default PersonalPageHeader;
