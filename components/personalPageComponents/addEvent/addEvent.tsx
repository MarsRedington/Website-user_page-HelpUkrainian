import React, { useEffect, useState, ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import { SHOW_TYPE_CC, SHOW_TYPE_WS } from "../../../constants/constants";
import SelectComponent from "../selectComponent/selectComponent";
import RadioComponent from "../radioComponent/radioComponent";
import { IEvent } from "../../../types/types";
import moment from "moment";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addEvent } from "../../../store/reducers/actionEventsCreator";
import "react-datepicker/dist/react-datepicker.css";
import "./addEvent.css";

function AddEvent({ active, onClose }: { active: boolean; onClose: Function }) {
  const NewEvent: IEvent = {
    id: null,
    locationId: "",
    type: SHOW_TYPE_CC,
    level: "",
    volunteerName: "",
    volunteerPhone: "",
    speaker: "",
    event_date: null,
    description: null,
    metadata: null,
    isOnline: "",
    isActive: "",
    topic: "",
  };

  const [eventData, setEventData] = useState<IEvent>(NewEvent);

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [showTypeEvent, setShowTypeEvent] = useState<string>(SHOW_TYPE_CC);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const dispatch = useAppDispatch();

  const handleChangeDate = (date: Date | null) => {
    setEventData({ ...eventData, event_date: moment.utc(date).unix() });
    setStartDate(date);
  };

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setEventData({
      ...eventData,
      metadata: event.target.value,
      id: moment().utc().unix(),
    });
  };

  const handleChangeLevel = (event: ChangeEvent<HTMLInputElement>) => {
    setEventData({ ...eventData, level: event.target.value });
  };

  const handleChangeLocation = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventData({ ...eventData, locationId: event.target.value });
  };

  const handleChangeTopic = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventData({ ...eventData, topic: event.target.value });
  };

  const handleChangeLevelWs = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventData({ ...eventData, level: event.target.value });
  };

  const handleChangeSpeaker = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventData({ ...eventData, speaker: event.target.value });
  };

  const CCLocation = ["Location1", "Location2", "Location3"];
  const CCTopics = ["About1", "About2", "About3"];
  const CCSpeaker = ["Speaker1", "Speaker2", "Speaker3"];
  const WSCoach = ["Coach1", "Coach2", "Coach3"];
  const WSTopics = ["Resume", "Networking", "Interwiew"];
  const WSLocation = ["Location1", "Location2", "Location3"];
  const MeettingTypes = ["Online", "Offline"];
  const LangLevels = [
    "Basic level",
    "Intermediate level",
    "Upper-Intermediate level",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    setEventData(NewEvent);
    setStartDate(new Date());
    onClose();
  };

  const addNewEvent = () => {
    switch (showTypeEvent) {
      case SHOW_TYPE_CC:
        if (
          eventData.type &&
          eventData.event_date &&
          eventData.level &&
          eventData.locationId &&
          eventData.topic &&
          eventData.speaker
        ) {
          dispatch(addEvent(eventData));
          setEventData(NewEvent);
          setStartDate(new Date());
          onClose();
        }
        break;
      case SHOW_TYPE_WS:
        if (
          eventData.type &&
          eventData.event_date &&
          eventData.level &&
          eventData.locationId &&
          eventData.speaker
        ) {
          dispatch(addEvent(eventData));
          setEventData(NewEvent);
          setStartDate(new Date());
          onClose();
        }
        break;
      default:
        break;
    }
  };

  const toggleTypeEvent = (range: string) => {
    setShowTypeEvent(range);
    setEventData({ ...NewEvent, type: range });
  };

  if (!active) {
    return null;
  }

  return (
    <section
      className={active ? "addEventComponent active" : "addEventComponent"}
      onClick={(e) => e.stopPropagation}
    >
      <div
        className="addEventModal"
        style={{ width: `${width * 0.35}px`, height: `${height * 0.8}px` }}
      >
        <div className="addEventComponentHeader">
          <h1>Add event</h1>
          <button className="closeAddEventModal" onClick={handleClose}>
            <img src="/assets/icons/xmark-solid.svg" alt="close" />
          </button>
        </div>
        <div className="selectTypeEvent">
          <div className="typeEventFrame">
            <button
              className={
                showTypeEvent === SHOW_TYPE_CC
                  ? "activeType selectTypeButton"
                  : "selectTypeButton"
              }
              onClick={() => toggleTypeEvent(SHOW_TYPE_CC)}
            >
              Conversation Club
            </button>
            <button
              className={
                showTypeEvent === SHOW_TYPE_WS
                  ? "activeType selectTypeButton"
                  : "selectTypeButton"
              }
              onClick={() => toggleTypeEvent(SHOW_TYPE_WS)}
            >
              Workshop
            </button>
          </div>
        </div>
        {showTypeEvent === SHOW_TYPE_CC ? (
          <div className="addEventInfo">
            <h3 className="CCTitle">Conversation Club</h3>
            <hr className="addEventHr"></hr>
            <RadioComponent
              selectOptions={MeettingTypes}
              title="Select type of event"
              iconSrc="/assets/icons/icon_group.png"
              onChangeHandler={handleChangeType}
            />
            <hr className="addEventHr"></hr>
            <RadioComponent
              selectOptions={LangLevels}
              title="Select language proficiency level"
              iconSrc="/assets/icons/lang.png"
              onChangeHandler={handleChangeLevel}
            />
            <hr className="addEventHr"></hr>
            <div className="selectDateEvent">
              <div className="selectDateTitle">
                <img src="/assets/icons/date.png" alt="Date" />
                <span> Select date</span>
              </div>
              <div className="selectDateControl">
                <DatePicker
                  className="myDatePicker"
                  selected={startDate}
                  onChange={(date) => handleChangeDate(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={30}
                  minTime={new Date(0, 0, 0, 8, 0)}
                  maxTime={new Date(0, 0, 0, 18, 0)}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  calendarStartDay={1}
                />
              </div>
            </div>
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={CCLocation}
              title="Select location"
              iconSrc="/assets/icons/icon_location.png"
              placeHolder="Select location"
              onChangeHandler={handleChangeLocation}
              currentValue={eventData.locationId}
            />
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={CCTopics}
              title="Select topic of event"
              iconSrc="/assets/icons/icon_topic.png"
              placeHolder="Select topic"
              onChangeHandler={handleChangeTopic}
              currentValue={eventData.topic}
            />
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={CCSpeaker}
              title="Select speaker"
              iconSrc="/assets/icons/icon_group.png"
              placeHolder="Select speaker"
              onChangeHandler={handleChangeSpeaker}
              currentValue={eventData.speaker}
            />
          </div>
        ) : null}
        {showTypeEvent === SHOW_TYPE_WS ? (
          <div className="addEventInfo">
            <h3 className="WSTitle">Workshop</h3>
            <hr className="addEventHr"></hr>
            <RadioComponent
              selectOptions={MeettingTypes}
              title="Select type of event"
              iconSrc="/assets/icons/icon_group.png"
              onChangeHandler={handleChangeType}
            />
            <hr className="addEventHr"></hr>
            <div className="selectDateTitle">
              <img src="/assets/icons/date.png" alt="Date" />
              <span> Select date</span>
            </div>
            <div className="selectDateControl">
              <DatePicker
                className="myDatePicker"
                selected={startDate}
                onChange={(date) => handleChangeDate(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                minTime={new Date(0, 0, 0, 8, 0)}
                maxTime={new Date(0, 0, 0, 18, 0)}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                calendarStartDay={1}
              />
            </div>
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={WSLocation}
              title="Select location"
              iconSrc="/assets/icons/icon_location.png"
              placeHolder="Select location"
              onChangeHandler={handleChangeLocation}
              currentValue={eventData.locationId}
            />
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={WSTopics}
              title="Select topic of event"
              iconSrc="/assets/icons/icon_topic.png"
              placeHolder="Select topic"
              onChangeHandler={handleChangeLevelWs}
              currentValue={eventData.level}
            />
            <hr className="addEventHr"></hr>
            <SelectComponent
              selectOptions={WSCoach}
              title="Select coach"
              iconSrc="/assets/icons/icon_group.png"
              placeHolder="Select coach"
              onChangeHandler={handleChangeSpeaker}
              currentValue={eventData.speaker}
            />
          </div>
        ) : null}
        <hr className="addEventHr"></hr>
        <div className="addEventControl">
          <button className="addEventSave" onClick={addNewEvent}>
            Save
          </button>
          <button className="addEventCancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddEvent;
