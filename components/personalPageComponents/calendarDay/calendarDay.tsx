import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { WEEK_HOURS } from "../../../constants/constants";
import { isDayContainCurrentEvent } from "../../../services/dateHelpers";
import CalendarDayEventCard from "../calendarDayEventCard/calendarDayEventCard";
import EventCard from "../eventCard/eventCard";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { deleteEvent } from "../../../store/reducers/actionEventsCreator";
import "./calendarDay.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IEvent } from "../../../types/types";

function CalendarDay({
  startDay,
  today,
  prevDayHandler,
  currentDayHandler,
  nextDayHandler,
  events,
  anyDate,
}: {
  startDay: Moment;
  today: Moment;
  prevDayHandler: Function;
  currentDayHandler: Function;
  nextDayHandler: Function;
  events: IEvent[];
  anyDate: Function;
}) {
  const [currentEvent, setCurrentEvent] = useState<IEvent | undefined>(() => findFirstEventOfDay(events, today));

  const dispatch = useAppDispatch();

  const deleteCurrentEvent = () => {
    dispatch(deleteEvent(currentEvent as IEvent));
    setCurrentEvent(undefined);
  };

useEffect(() => {
  setCurrentEvent(() => findFirstEventOfDay(events, today))
}, [today, events])

  function findFirstEventOfDay(eventsList: IEvent[], day: Moment): IEvent | undefined {
    const sortedEvents = [...eventsList].sort((a, b) => a.event_date - b.event_date);
    const firstEvent = sortedEvents.find(event => isDayContainCurrentEvent(event, day));
    return firstEvent ? firstEvent : undefined;
  };


  const sortEvents = [...events].sort((a, b) => a.event_date - b.event_date);
  const cellsValue = [...WEEK_HOURS].map((_, i) => {
    const temp: IEvent[] = [];
    sortEvents
      .filter((event: IEvent) => isDayContainCurrentEvent(event, today))
      .forEach((event: IEvent) => {
        if (+moment.unix(event.event_date).format("H") - 8 === i) {
          temp.push(event);
        }
      });
    return temp.sort((a, b) => a.event_date - b.event_date);
  });

  const handleEventCardClick = (event: IEvent) => {
    setCurrentEvent(event);
  };

  const datePickerChangeHandler = (date: Date | null) => {
    anyDate(date);
  };

  console.log(1, cellsValue)

  return (
    <main className="mainDayEvents">
      <div className="calendarDayWrapper">
        <div className="calendarDay">
          <div className="dayControls">
            <div className="dayControl">
              <button className="prevDay" onClick={() => prevDayHandler()}>
                &lt;
              </button>
              <button
                className="currentDay"
                onClick={() => currentDayHandler()}
              >
                {today.format("MMM DD") + ", " + today.format("YYYY")}
              </button>
              <button className="nextDay" onClick={() => nextDayHandler()}>
                &gt;
              </button>
            </div>
            {/* <div className="showCalendar">
              <button>
                <img src="/assets/icons/skipCalIcon.png" alt="icon" />
              </button>
            </div> */}
          </div>
          <div className="mainDayGrid">
            {cellsValue.map((eventsList, i) => (
              <div className="dayCell" key={WEEK_HOURS[i]}>
                <span className="dayCellTimeWrapper">{WEEK_HOURS[i]}</span>
                <span className="dayCellEventsWrapper">
                  {eventsList.map((event, i) => (
                    <div
                      onClick={() => handleEventCardClick(event)}
                      key={event.id}
                    >
                      <CalendarDayEventCard
                        event={event}
                        eventNumber={i}
                        width={230}
                      />
                    </div>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rightSideInformation">
        <div className="monthCalendar">
          <DatePicker
            className="monthCalendarDatePicker"
            selected={today.toDate()}
            calendarStartDay={1}
            onChange={(date) => datePickerChangeHandler(date)}
            inline
          />
        </div>
        <div className="eventInformation">
          {currentEvent ? (
            <EventCard event={currentEvent} deleteEvent={deleteCurrentEvent} />
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default CalendarDay;
