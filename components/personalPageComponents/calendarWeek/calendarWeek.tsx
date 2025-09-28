import React from "react";
import { Moment } from "moment";
import { WEEK_HOURS } from "../../../constants/constants";
import {
  isCurrentDay,
  isDayAndTimeContainCurrentEvent,
} from "../../../services/dateHelpers";
import CalendarWeekDayEventCard from "../calendarWeekDayEventCard/calendarWeekDayEventCard";
import "./calendarWeek.css";
import { IEvent } from "../../../types/types";

function CalendarWeek({
  startDay,
  today,
  prevWeekHandler,
  currentWeekHandler,
  nextWeekHandler,
  events,
}: {
  startDay: Moment;
  today: Moment;
  prevWeekHandler: Function;
  currentWeekHandler: Function;
  nextWeekHandler: Function;
  events: IEvent[];
}) {
  function setWeekData(start: Moment, end: Moment): Moment[] {
    const days: Moment[] = [];
    let startWeek = start;

    while (startWeek <= end) {
      days.push(startWeek);
      startWeek = startWeek.clone().add(1, "d");
    }
    return days;
  }

  function setWeekMatrix(weekDays: Moment[]): Moment[]{
    const resultMatrix: Moment[] = [];
    let startHour = 8;
    let weekLength = 0;
    
    for (let i = 0; i <= 90; i++) {
      if (weekLength === 7) {
        weekLength = 0;
        startHour++;
      }
      resultMatrix[i] = weekDays[weekLength].clone().add(startHour, "h");
      weekLength++;
    }

    return resultMatrix
  }

  const startOfWeek = startDay.clone();
  const endOfWeek = today.endOf("week");

  const weekDays = setWeekData(startOfWeek, endOfWeek);

  const weekMatrix: Moment[] = setWeekMatrix(weekDays);

  return (
    <main className="calendarWeek">
      <div className="weekControl">
        <button className="prevWeek" onClick={() => prevWeekHandler()}>
          &lt;
        </button>
        <button className="currentWeek" onClick={() => currentWeekHandler()}>
          {weekDays[0].format("MMM DD") +
            ", " +
            weekDays[0].format("YYYY") +
            " - " +
            weekDays[6].format("MMM DD") +
            ", " +
            weekDays[6].format("YYYY")}
        </button>
        <button className="nextWeek" onClick={() => nextWeekHandler()}>
          &gt;
        </button>
      </div>
      <div className="mainWeekGrid">
        <div className="weekHoursTitle">
          {WEEK_HOURS.map((hour, idx) => (
            <div className="weekHoursCell" key={idx}>
              {hour}
            </div>
          ))}
        </div>
        <div className="weekGridValue">
          <div className="weekTitleDay">
            {weekDays.map((dayValue: Moment, idx: number) => (
              <div className="weekDayName" key={idx}>
                {isCurrentDay(dayValue) ? (
                  <span className="currentWeekDayWrapper">
                    {dayValue.format("DD") + ", " + dayValue.format("ddd")}
                  </span>
                ) : (
                  dayValue.format("DD") + ", " + dayValue.format("ddd")
                )}
              </div>
            ))}
          </div>
          <div className="weekGrid">
            {weekMatrix.map((matrixValue, idx) => (
              <div className="weekCellValue" key={+idx}>
                {events.map((event: IEvent) =>
                  isDayAndTimeContainCurrentEvent(event, matrixValue) ? (
                    <CalendarWeekDayEventCard
                      event={event}
                      key={event.id}
                    />
                  ) : null
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CalendarWeek;
