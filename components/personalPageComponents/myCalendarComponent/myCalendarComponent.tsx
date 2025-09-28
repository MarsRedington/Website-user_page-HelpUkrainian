import React, { useEffect, useState } from "react";
import useOpenController from "../../../hooks/useOpenController";
import CalendarDay from "../calendarDay/calendarDay";
import CalendarWeek from "../calendarWeek/calendarWeek";
import CalendarMonth from "../calendarMonth/calendarMonth";
import moment, { Moment } from "moment";
import MainCalendarFilter from "../mainCalendarFilter/mainCalendarFilter";
import {
  SHOW_DAY_MODE,
  SHOW_MONTH_MODE,
  SHOW_WEEK_MODE,
} from "../../../constants/constants";
import "./myCalendarComponent.css";
import { IEvent } from "../../../types/types";

function MyCalendarComponent({events}: {events: IEvent[]}) {

  moment.updateLocale("en", { week: { dow: 1 } });

  const { isOpen, toggle } = useOpenController(false);
  const [showTimeRange, setShowTimeRange] =
    useState<moment.unitOfTime.DurationConstructor>(SHOW_DAY_MODE);

  const [today, setToday] = useState<Moment>(moment());
  const startDayMonth: Moment = today.clone().startOf('month').startOf("week");
  const startDayWeek: Moment = today.clone().startOf("week");

  const prevDateHandler = () => {
    setToday((prev) => prev.clone().subtract(1, showTimeRange));
  };

  const currentDateHandler = () => {
    setToday(moment());
  };

  const nextDateHandler = () => {
    setToday((prev) => prev.clone().add(1, showTimeRange));
  };

  const anyDayHandler = (date: number) => {
    setToday(moment(date))
  }

  const goToDay = (date: number) => {
    setShowTimeRange(SHOW_DAY_MODE)
    setToday(moment.unix(date));
  }

  const toggleTimeRange = (range: moment.unitOfTime.DurationConstructor) => {
    setShowTimeRange(range);
    setToday(moment());
  };

  useEffect(() => {}, [showTimeRange]);

  return (
    <main className="myCalendarComponent">
      <div className="calendarFilterFiels">
        <div className="dayFilter">
          <button
            onClick={() => toggleTimeRange(SHOW_DAY_MODE)}
            className={
              showTimeRange === SHOW_DAY_MODE
                ? "activeRange dayFilterButton"
                : "dayFilterButton"
            }
          >
            Day
          </button>
          <button
            onClick={() => toggleTimeRange(SHOW_WEEK_MODE)}
            className={
              showTimeRange === SHOW_WEEK_MODE
                ? "activeRange dayFilterButton"
                : "dayFilterButton"
            }
          >
            Week
          </button>
          <button
            onClick={() => toggleTimeRange(SHOW_MONTH_MODE)}
            className={
              showTimeRange === SHOW_MONTH_MODE
                ? "activeRange dayFilterButton"
                : "dayFilterButton"
            }
          >
            Month
          </button>
        </div>
        <div className="mainFilter">
          <div className="filterTitle" onClick={toggle}>
            <div>Filter By</div>
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
          {isOpen ? <MainCalendarFilter close={toggle}/> : null}
        </div>
      </div>
      {showTimeRange === SHOW_DAY_MODE ? (
        <CalendarDay
          startDay={startDayMonth}
          today={today}
          prevDayHandler={prevDateHandler}
          currentDayHandler={currentDateHandler}
          nextDayHandler={nextDateHandler}
          events={events}
          anyDate={anyDayHandler}
        />
      ) : null}
      {showTimeRange === SHOW_WEEK_MODE ? (
        <CalendarWeek
          startDay={startDayWeek}
          today={today}
          prevWeekHandler={prevDateHandler}
          currentWeekHandler={currentDateHandler}
          nextWeekHandler={nextDateHandler}
          events={events}
        />
      ) : null}
      {showTimeRange === SHOW_MONTH_MODE ? (
        <CalendarMonth
          startDay={startDayMonth}
          today={today}
          prevMonthHandler={prevDateHandler}
          currentMonthHandler={currentDateHandler}
          nextMonthHandler={nextDateHandler}
          events={events}
          toDay={goToDay}
        />
      ) : null}
    </main>
  );
}

export default MyCalendarComponent;
