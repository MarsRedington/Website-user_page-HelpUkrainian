import { ChangeEvent } from "react";

export interface IQuestion {
  question: string;
  answer: string;
}

export interface IPresentationText {
  title1: string;
  title2?: string;
  description: string;
}

export interface IPresentationPhoto {
  pathFoto: string;
  photoDescription: string;
}

export interface ITeams {
  name: string;
  job: string;
  pathFoto: string;
}

export interface ITestimonials {
  name: string;
  answer: string;
  animating?: boolean;
}

export interface IWorkshops {
  number: string;
  title: string;
  description1: string;
  description2?: string;
  iconPath: string;
}

export interface IActivities {
  imgPath: string;
  title: string;
  description: string;
}

export interface IFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  requestType: string;
  message: string;
}

export interface IFormDirty {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  requestType: boolean;
  message: boolean;
}

export interface IEvent {
  id: any;
  locationId: any;
  type: any;
  level: any;
  volunteerName: any;
  volunteerPhone: any;
  speaker: any;
  event_date: any;
  description: any;
  metadata: any;
  isOnline: any;
  isActive: any;
  topic: any;
  duration?:any
}

export interface ICClub {
  all: boolean;
  basic: boolean;
  inter: boolean;
  upper: boolean;
}

export interface IWorkShop {
  all: boolean;
  resume: boolean;
  interwiew: boolean;
  net: boolean;
}

export interface IFilter {
  allClub: boolean;
  basic: boolean;
  intermediate: boolean;
  upper: boolean;
  allWorkshop: boolean;
  resume: boolean;
  interwiew: boolean;
  networking: boolean;
}

export interface EventsState {
  events: IEvent[];
  isLoading: boolean;
  error: string;
}

export interface FilterState {
  filter: IFilter;
  // isLoading: boolean;
  // error: string;
}

export interface IUser {
  firstName: string,
  lastName: string,
  photo: string,
  position: string,
  email: string,
  phone: string,
}

export interface UserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

export type InputChangeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>;

export enum EventsClassification {
  basic = "Basic level",
  intermediate = "Intermediate level",
  upper = "Upper-Intermediate level",
  resume = "Resume",
  interwiew = "Interwiew",
  networking = "Networking"
}
