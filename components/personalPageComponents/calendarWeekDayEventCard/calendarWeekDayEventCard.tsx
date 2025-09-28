import React from "react";
import moment from "moment";
import "./calendarWeekDayEventCard.css";
import { IEvent } from "../../../types/types";

function CalendarWeekDayEventCard({
  event
}: {
  event: IEvent;
}) {
  let eventDuration = event.type === "WorkShop" ? 4 : 2;
  return (
    <div
      className="eventWeekCardWrapper"
      key={event.id}
      style={{
        height: eventDuration * 48,
        top: (50 * +moment.unix(event.event_date).format("m")) / 60,
      }}
    >
      <div className="eventWeekCard">
        <div className="eventWeekCardHeader">
          <div className="eventWeekTime">
            {moment.unix(event.event_date).format("MMM DD") +
              ", " +
              moment.unix(event.event_date).format("YYYY") +
              ", " +
              moment.unix(event.event_date).format("LT")}
          </div>
          <div className="eventWeekAction"></div>
        </div>
        <div className="eventWeekCardType">{event.type}</div>
        <div className="eventWeekCardFooter">
          <div className="eventWeekLocation">
            <img src="/assets/icons/icon_location.png" alt="location" />
            <span>{event.locationId}</span>
          </div>
          <div className="showWeekEventInfo">
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarWeekDayEventCard;
