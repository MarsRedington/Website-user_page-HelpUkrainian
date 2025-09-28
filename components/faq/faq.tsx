import React from 'react';
import Accordion from '../accordion/accordion';
import './faq.css';

function MainFAQ() {
  return (
    <div className="mainFaq">
      <div className="faq">
        <h2 className="faqTitle">Questions & Answers</h2>
        <Accordion />
      </div>
    </div>
  );
}

export default MainFAQ;
