import { ChangeEvent, useState } from "react";
import "./radioComponent.css";

function RadioComponent({
  selectOptions,
  title,
  iconSrc,
  onChangeHandler,
}: {
  selectOptions: string[];
  title: string;
  iconSrc: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  
  function onValueChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="radioComponent">
      <div className="radioComponentTitle">
        <img src={iconSrc} alt={title} />
        <span>{title}</span>
      </div>
      <div className="radioComponentControl">
        {selectOptions.map((item, i) => (
          <div className="radioGroup" key={item}>
            <input
              type="radio"
              className="radioComponentInput"
              name={item}
              value={item}
              checked={selectedOption === item}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeHandler(event);
                onValueChange(event);
              }}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioComponent;
