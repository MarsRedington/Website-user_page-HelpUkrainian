import React, { useEffect, useState } from "react";
import PersonalPageHeader from "../personalPageHeader/personalPageHeader";
import MyCalendarComponent from "../myCalendarComponent/myCalendarComponent";
import MyEventsComponent from "../myEventsComponent/myEventsComponent";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchEvents } from "../../../store/reducers/actionEventsCreator";
import "./eventsComponent.css";
import {
  fetchFilter
} from "../../../store/reducers/actionFilterCreator";
import { EventsClassification, IEvent, IFilter } from "../../../types/types";
import { TYPES_EVENT_VALUE } from "../../../constants/constants";

function EventsComponents() {
  const [toggleState, setToggleState] = useState(1);

  const dispatch = useAppDispatch();
  const { events, isLoading, error } = useAppSelector(
    (state) => state.eventsReducer
  );
  const { filter } = useAppSelector((state) => state.filterReducer);

  const [eventsState, setEventsState] = useState<IEvent[]>(events);
  const [toggleFilter, setToggleFilter] = useState(TYPES_EVENT_VALUE.all);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchFilter());
  }, []);

  useEffect(() => {
    const sortedEvents = mainFilterEvents(events, filter); 
    setEventsState(filterClickEvents(sortedEvents, toggleFilter));
  }, [events, filter, toggleFilter]);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const filterButtonHandler = (filterValue: string) => {
    setToggleFilter(filterValue);
    setEventsState(filterClickEvents(eventsState, filterValue));
  };

  const filterClickEvents = (events: IEvent[], filter: string): IEvent[] => {
    let resultEvents = [...events];
    if (filter === TYPES_EVENT_VALUE.all) {
      return resultEvents;
    } else {
      return resultEvents.filter((element: IEvent) => element.type === filter);
    }
  };

  function mainFilterEvents (events: IEvent[], filter: IFilter): IEvent[] {
    let result = [...events];
    const filterValue = Object.keys(filter).filter((key): key is keyof IFilter => filter[key as keyof IFilter] === true);
    const mappedArray = filterValue.map(item => EventsClassification[item as keyof typeof EventsClassification] || item);
    return result.filter(event => mappedArray.includes(event.level));
  };
  return (
    <main className="eventsComponents">
      <PersonalPageHeader />
      <section className="eventContent">
        <div className="tabContainer">
          <div className="tabsHeader">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                My Calendar
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                My Events
              </button>
            </div>
            <div className="eventsFilter">
              <button
                className={
                  toggleFilter === TYPES_EVENT_VALUE.all
                    ? "activeButton eventsFilterButton"
                    : "eventsFilterButton"
                }
                onClick={() => filterButtonHandler(TYPES_EVENT_VALUE.all)}
              >
                All
              </button>
              <button
                className={
                  toggleFilter === TYPES_EVENT_VALUE.cClub
                    ? "activeButton eventsFilterButton"
                    : "eventsFilterButton"
                }
                onClick={() => filterButtonHandler(TYPES_EVENT_VALUE.cClub)}
              >
                Conversation club
              </button>
              <button
                className={
                  toggleFilter === TYPES_EVENT_VALUE.workShop
                    ? "activeButton eventsFilterButton"
                    : "eventsFilterButton"
                }
                onClick={() => filterButtonHandler(TYPES_EVENT_VALUE.workShop)}
              >
                Workshops
              </button>
            </div>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <MyCalendarComponent events={eventsState} />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <MyEventsComponent events={eventsState} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsComponents;
