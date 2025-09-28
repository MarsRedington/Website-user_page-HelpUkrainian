import React, { useState } from "react";
import "./mainCalendarFilter.css";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeFilter } from "../../../store/reducers/actionFilterCreator";
import { IFilter } from "../../../types/types";

const MainCalendarFilter = ({ close }: { close: Function }) => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filterReducer);

  const [checkBoxStates, setCheckBoxStates] = useState<IFilter>(filter);

  const saveFilter = () => {
    dispatch(changeFilter(checkBoxStates));
    close();
  };

  return (
    <div className="filterBy">
      <div className="filterConvClub">
        <p>Conversation club:</p>
        <div id="checkboxesConvClub">
          <label htmlFor="allcc">
            <input
              type="checkbox"
              id="allcc"
              checked={checkBoxStates.allClub}
              onChange={() => {
                const newVal = !checkBoxStates.allClub;
                setCheckBoxStates((prevState) => ({
                  ...prevState,
                  allClub: newVal,
                  basic: newVal,
                  intermediate: newVal,
                  upper: newVal,
                }));
              }}
            />
            <span>All</span>
          </label>
          <label htmlFor="basiccc">
            <input
              type="checkbox"
              id="basiccc"
              checked={checkBoxStates.basic}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  basic: !checkBoxStates.basic,
                };
                updatedValue.allClub =
                  updatedValue.basic &&
                  updatedValue.intermediate &&
                  updatedValue.upper;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Basic level</span>
          </label>
          <label htmlFor="intercc">
            <input
              type="checkbox"
              id="intercc"
              checked={checkBoxStates.intermediate}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  intermediate: !checkBoxStates.intermediate,
                };
                updatedValue.allClub =
                  updatedValue.basic &&
                  updatedValue.intermediate &&
                  updatedValue.upper;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Intermediate level</span>
          </label>
          <label htmlFor="appercc">
            <input
              type="checkbox"
              id="appercc"
              checked={checkBoxStates.upper}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  upper: !checkBoxStates.upper,
                };
                updatedValue.allClub =
                  updatedValue.basic &&
                  updatedValue.intermediate &&
                  updatedValue.upper;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Apper-intermediate level</span>
          </label>
        </div>
      </div>
      <hr className="filterLine"></hr>
      <div className="filterWorkshop">
        <p>Workshop:</p>
        <div id="checkboxesWorkshop">
          <label htmlFor="allw">
            <input
              type="checkbox"
              id="allw"
              checked={checkBoxStates.allWorkshop}
              onChange={() => {
                const newVal = !checkBoxStates.allWorkshop;
                setCheckBoxStates((prevState) => ({
                  ...prevState,
                  allWorkshop: newVal,
                  resume: newVal,
                  interwiew: newVal,
                  networking: newVal,
                }));
              }}
            />
            <span>All</span>
          </label>
          <label htmlFor="resume">
            <input
              type="checkbox"
              id="resume"
              checked={checkBoxStates.resume}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  resume: !checkBoxStates.resume,
                };
                updatedValue.allWorkshop =
                  updatedValue.resume &&
                  updatedValue.interwiew &&
                  updatedValue.networking;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Resume</span>
          </label>
          <label htmlFor="jobi">
            <input
              type="checkbox"
              id="jobi"
              checked={checkBoxStates.interwiew}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  interwiew: !checkBoxStates.interwiew,
                };
                updatedValue.allWorkshop =
                  updatedValue.resume &&
                  updatedValue.interwiew &&
                  updatedValue.networking;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Job Interview</span>
          </label>
          <label htmlFor="network">
            <input
              type="checkbox"
              id="network"
              checked={checkBoxStates.networking}
              onChange={() => {
                const updatedValue = {
                  ...checkBoxStates,
                  networking: !checkBoxStates.networking,
                };
                updatedValue.allWorkshop =
                  updatedValue.resume &&
                  updatedValue.interwiew &&
                  updatedValue.networking;
                setCheckBoxStates(updatedValue);
              }}
            />
            <span>Networking</span>
          </label>
        </div>
      </div>
      <hr className="filterLine"></hr>
      <div className="mainFilterButtons">
        <button className="filterButtonSave" onClick={saveFilter}>
          SAVE
        </button>
        <button className="filterButtonCancel" onClick={() => close()}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default MainCalendarFilter;
