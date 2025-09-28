import { ChangeEvent } from "react";
import "./selectComponent.css";

function SelectComponent({
  selectOptions,
  title,
  iconSrc,
  placeHolder,
  onChangeHandler,
  currentValue,
}: {
  selectOptions: any[];
  title: string;
  iconSrc: string;
  placeHolder: string;
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  currentValue: string;
}) {
  let resultOptions = [...selectOptions];
  resultOptions.unshift(placeHolder);

  return (
    <div className="selectComponent">
      <div className="selectComponentTitle">
        <img src={iconSrc} alt={placeHolder} />
        <span>{title}</span>
      </div>
      <div className="selectComponentControl">
        <select value={currentValue} onChange={onChangeHandler}>
          {resultOptions.map((item, i) =>
            i === 0 ? (
              <option value="" key={item} disabled hidden className="selectPlaceholder">
                {" "}
                {placeHolder}
              </option>
            ) : (
              <option value={item} key={item}>
                {item}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default SelectComponent;
