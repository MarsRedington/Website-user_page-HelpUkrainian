import React from 'react';
import useOpenController from '../../hooks/useOpenController';
import { IQuestion } from '../../types/types';
import './accordionItem.css';

interface ExpendableColumnProps {
  question: string;
  isOpen: boolean;
  toggle: () => void;
}

function AccordionItem({ section } : { section: IQuestion}) {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <div className="accordionItem">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
    </div>
  );
}

export default AccordionItem;

export const ExpendableColumn = ({ question, isOpen, toggle }: ExpendableColumnProps) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className={isOpen ? "column-text open": "column-text"}>{question}</div>
      <div
        className="chevron"
        style={{
          transform: `rotate(${isOpen ? 270 : 90}deg)`,
          transition: "all 0.25s",
        }}
      >
        <img src="/assets/bg/chevron-right.svg" alt="chevron"></img>
      </div>
    </div>
  );
};

export const TextSection = ({ text }: { text: string}) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};
