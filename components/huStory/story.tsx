import React from "react";
import "./story.css";

function Story() {
  return (
    <div className="story">
      <div className="video">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/iVi23-C4egA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="videoDescription">
        <h3>Our story</h3>
        <p>
          Our project began with one person who could not sit still, watching
          Ukrainian newcomers struggle to adjust to living in Canada. In her
          aspiration to help these people build a new life in a new country, Ana
          Lokotkova gathered a team of like-minded volunteers who blended their
          shared passion, professional expertise and unique skills to scale our
          impact quickly.  Each of our volunteers is dedicated to empowering
          Ukrainian newcomers with top-quality support and resources. We believe
          that even the smallest things can make a big difference, and real
          change starts with every one of us.
        </p>
      </div>
    </div>
  );
}

export default Story;
