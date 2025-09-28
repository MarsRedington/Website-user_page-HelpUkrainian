import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import Story from "../huStory/story";
import Statistics from "../statistics/statistics";
import "./ourStory.css";

function OurStory() {
  const location = useLocation();
  const ourStoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#ourStory' && ourStoryRef.current) {
      ourStoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="ourStory" id="ourStory" ref={ourStoryRef}>
      <Story />
      <Statistics />
    </div>
  );
}

export default OurStory;
