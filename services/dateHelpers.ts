import moment, { Moment } from "moment";
import { IEvent } from "../types/types";

export const isCurrentDay = (day: Moment): boolean => {
  return moment().isSame(day, "day");
};

export const isSelectedMonth = (day: Moment, today: Moment): boolean => {
  return today.isSame(day, "month");
};

export const isDayContainCurrentEvent = (
  event: IEvent,
  dayItem: Moment
): boolean => {
  return (
    event.event_date >= dayItem.startOf("day").format("X") &&
    event.event_date <= dayItem.clone().endOf("day").format("X")
  );
};

export const isDayAndTimeContainCurrentEvent = (
  event: IEvent,
  dayItem: Moment
): boolean => {
  return(
    (moment.unix(event.event_date).format('YYYY MM DD') === dayItem.format('YYYY MM DD'))&&(moment.unix(event.event_date).format('HH') === dayItem.format('HH'))
  );
};
