import React from "react";
import moment, { Moment } from "moment";
import {
  isCurrentDay,
  isDayContainCurrentEvent,
  isSelectedMonth,
} from "../../../services/dateHelpers";
import "./calendarMonth.css";
import { IEvent } from "../../../types/types";

function CalendarMonth({
  startDay,
  today,
  prevMonthHandler,
  currentMonthHandler,
  nextMonthHandler,
  events,
  toDay
}: {
  startDay: Moment;
  today: Moment;
  prevMonthHandler: Function;
  currentMonthHandler: Function;
  nextMonthHandler: Function;
  events: IEvent[];
  toDay: Function
}) {
  const day = startDay.clone().subtract(1, "day");
  const totalDays = 42;
  const calendarValues = [...Array(totalDays)].map(() =>
    day.add(1, "day").clone()
  );

  const sortEvents = [...events].sort((a,b) => a.event_date - b.event_date);

  return (
    <main className="calendarMonth">
      <div className="monthControl">
        <button className="prevMonth" onClick={() => prevMonthHandler()}>
          &lt;
        </button>
        <button className="currentMonth" onClick={() => currentMonthHandler()}>
          {today.format("MMM YYYY")}
        </button>
        <button className="nextMonth" onClick={() => nextMonthHandler()}>
          &gt;
        </button>
      </div>
      <div className="mainMonthGrid">
        <div className="monthTitleDay">
          {[...Array(7)].map((_, idx: number) => (
            <div className="monthDayName" key={idx}>
              {moment()
                .day(idx + 1)
                .format("ddd")}
            </div>
          ))}
        </div>
        <div className="monthGrid">
          {calendarValues.map((dayItem: Moment, index: number) => (
            <div key={index} className="monthCell">
              <div className="rowInCellMonth">
                <div className="dayWrapperMonth">
                  {isCurrentDay(dayItem) ? (
                    <div className="currentDayWrapper">
                      {dayItem.format("D")}
                    </div>
                  ) : isSelectedMonth(dayItem, today) ? (
                    <div className="selectedMonthWrapper">
                      {dayItem.format("D")}
                    </div>
                  ) : (
                    dayItem.format("D")
                  )}
                </div>
              </div>
              <div className="eventsMonthWrapper">
                {sortEvents
                  .filter((event: IEvent) =>
                    isDayContainCurrentEvent(event, dayItem)
                  )
                  .slice(0, 1)
                  .map((event: IEvent, idx: number) => (
                    <div className="eventMonthWrapper" key={idx} onClick={() =>toDay(event.event_date)}>
                      <div className="eventMonthWrapper_tittle">
                        <span className="titleEventMonthWrapper">{moment.unix(event.event_date).format("LT")}</span>
                        <span className="titleEventMonthWrapperControl">&gt;</span>
                      </div>
                      <div className="eventMonthWrapper_type">
                        <span className="typeEventMonthWrapper">{event.type}</span>
                      </div>
                    </div>
                  ))}
                {events.filter((event: IEvent) =>
                  isDayContainCurrentEvent(event, dayItem)
                ).length > 1 ? (
                  <span  className="moreEvents"> {events.filter((event: IEvent) =>
                    isDayContainCurrentEvent(event, dayItem)
                  ).length} events </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CalendarMonth;
