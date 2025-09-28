import React from "react";
import { questions } from "../../data/faqQuestions";
import AccordionItem from "../accordionItem/accordionItem";
import "./accordion.css";

function Accordion() {
  return (
    <div className="accordion">
      {questions.map((section, index) => (
        <AccordionItem key={index} section={section} />
      ))}
    </div>
  );
}

export default Accordion;
