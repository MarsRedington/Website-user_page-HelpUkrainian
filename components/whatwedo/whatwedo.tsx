import React from 'react';
import Activities from '../activities/activities';
import './whatwedo.css';

function WhatWeDo() {
  return (
    <div className="whatWeDo" id="workshops">
      <h1 className="whatTitle">How we help Ukrainians</h1>
      <Activities />
    </div>
  );
}

export default WhatWeDo;
