import React from "react";
import TestimonialsCarousel from "../testmonialsCarousel/testmonialsCarousel";
import "./testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="description">
          <div className="testDescriptions">
            <h2>What people say</h2>
            <p>
              We are happy to see the impact we make by helping Ukrainians to
              settle down in Canada. Your feedback inspires us to keep working
              on new ideas and activities.
            </p>
          </div>
          <img
            className="vector"
            src="/assets/bg/vec.png"
            alt="vector"
          ></img>
        </div>
        <div className="testBackground">
          <img src="/assets/bg/testimonials.png" alt="testimonials"></img>
        </div>
      </div>
      <TestimonialsCarousel />
    </div>
  );
}

export default Testimonials;
