import React, { useState } from "react";
import "./multiSelectInput.css";

function MultiSelectInput() {
  const [expanded, setExpanded] = useState(false);

  const showCheckboxes = () => {
    setExpanded(!expanded);
  };

  const styleForCheckEvents = {
    display: expanded ? "block" : "none",
  };

  return (
    <div className="multiselect">
      <div className="selectBox" onClick={() => showCheckboxes()}>
        <select>
          <option></option>
        </select>
        <div className="overSelect"></div>
      </div>
      <div id="checkboxes" style={styleForCheckEvents}>
        <label htmlFor="one">
          <input type="checkbox" id="one" />
          <span>Workshops</span>
        </label>
        <label htmlFor="two">
          <input type="checkbox" id="two" />
          <span>Speaking club (basic)</span>
        </label>
        <label htmlFor="three">
          <input type="checkbox" id="three" />
          <span>Speaking club (intermediate)</span>
        </label>
        <label htmlFor="four">
          <input type="checkbox" id="four" />
          <span>Speaking club (apper-intermediate)</span>
        </label>
      </div>
    </div>
  );
}

export default MultiSelectInput;
