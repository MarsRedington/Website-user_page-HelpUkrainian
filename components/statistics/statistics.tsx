import React from 'react';
import './statistics.css';

function Statistics() {
  return (
    <div className="statistics">
      <div className="statisticInfo">
        <h3>50+</h3>
        <p>Hybrid workshops held in Calgary</p>
      </div>
      <div className="statisticInfo">
        <h3>60+</h3>
        <p>Conversation club meetups</p>
      </div>
      <div className="statisticInfo">
        <h3>80+</h3>
        <p>Hours of engaging training</p>
      </div>
      <div className="statisticInfo">
        <h3>500+</h3>
        <p>Ukrainian newcomers attended our events</p>
      </div>
      <div className="statisticInfo">
        <h3>1600+</h3>
        <p>Newcomers reached us online</p>
      </div>
      <div className="statisticInfo">
        <h3>$3,320+</h3>
        <p>Raised to support Ukraine through multiple initiatives</p>
      </div>
    </div>
  );
}

export default Statistics;
