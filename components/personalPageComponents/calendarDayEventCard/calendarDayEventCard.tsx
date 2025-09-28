import React from "react";
import moment from "moment";
import "./calendarDayEventCard.css";
import { IEvent } from "../../../types/types";

function CalendarDayEventCard({
  event,
  eventNumber,
  width,
}: {
  event: IEvent;
  eventNumber: number;
  width: number;
}) {
  let eventDuration = event.type === "Workshop" ? 4 : 2;
  return (
    <div
      className="eventCardWrapper"
      key={event.id}
      style={{
        height: eventDuration * 50,
        right: -230 * (eventNumber + 1) - eventNumber * 5,
        top: -30 + (50 * +moment.unix(event.event_date).format("m")) / 60,
        width: width,
      }}
    >
      <div className="eventCard">
        <div className="eventCardHeader">
          <div className="eventTime">
            {moment.unix(event.event_date).format("MMM DD") +
              ", " +
              moment.unix(event.event_date).format("YYYY") +
              ", " +
              moment.unix(event.event_date).format("LT")}
          </div>
          <div className="eventAction"></div>
        </div>
        <div className="eventCardType">{event.type}</div>
        <div className="eventCardFooter">
          <div className="eventLocation">
            <img src="/assets/icons/icon_location.png" alt="location" />
            <span>{event.locationId}</span>
          </div>
          <div className="showEventInfo">
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarDayEventCard;
