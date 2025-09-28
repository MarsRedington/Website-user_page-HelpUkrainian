import React from "react";
import "./myEventsComponent.css";
import { IEvent } from "../../../types/types";

function MyEventsComponent({events}: {events: IEvent[]}) {

  return (
    <section className="myEventsList">
      <div className="myDayEventsList">
        <div className="myDayEventsListActions">
          <div className="eventsListDayControl"></div>
          <div className="eventsListFilter"></div>
        </div>
        <div className="myDayList"></div>
      </div>
      <div className="myWeekEventsList">
        <div className="myWeekEventsListActions">
          <div className="eventsListWeekControl"></div>
          <div className="eventsListWeekControlCarousel"></div>
        </div>
        <div className="myWeekList"></div>
      </div>
      <div className="myMonthEventsList">
        <div className="myMonthEventsListActions">
          <div className="eventsListMontsControl"></div>
          <div className="eventsListMonthControlCarousel"></div>
        </div>
        <div className="myMonthList"></div>
      </div>
    </section>
  );
}

export default MyEventsComponent;
