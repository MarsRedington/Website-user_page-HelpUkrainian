import moment from "moment";
import "./eventCard.css";
import { IEvent } from "../../../types/types";

function EventCard({ event, deleteEvent }: { event: IEvent; deleteEvent: () => void }) {
  return (
    <div className="mainEventCard">
      <div className="cardHeader">
        <div className="eventsLevel">{event.level}</div>
        <div className="deleteIconEvent" onClick={deleteEvent}>
          <img src="/assets/icons/icon_delete.png" alt="Delete" />
        </div>
      </div>
      <div className="eventCardTypeHeader">
        {event.type}
      </div>
      <div className="cardInformation">
        <div className="eventCardTime">
          <img src="/assets/icons/icon_schedule.png" alt="icon_schedule" />
          <span>
            {moment.unix(event.event_date).format("DD-MM-YYYY") + ", "+ moment.unix(event.event_date).format("LT") +
              " - " +
              moment.unix(event.event_date).add(2, "h").format("LT")}
          </span>
        </div>
        <div className="eventCardLocation">
          <img src="/assets/icons/icon_location.png" alt="Location" />
          <span>{event.locationId}</span>
        </div>
        <div className="eventCardVolunteer">
          <img src="/assets/icons/icon_group.png" alt="Group" />
          <span>
            Volunteer: {event.volunteerName} ({event.volunteerPhone})
          </span>
        </div>
        <div className="eventCardSpeaker">
          <img src="/assets/icons/icon_flagcanada.png" alt="Flag" />
          <span>Native speaker: {event.speaker}</span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
