import type { FC } from "react";
import type { Event } from "../../types";
import heart from '../../img/heart.svg';

type EventItemProps = {
  event: Event;
  onRegisterClick: () => void;
}


export const EventItem: FC<EventItemProps> = ({ event, onRegisterClick }) => {

 

  return (
    <tr>
      <td className="date-column">{event.date}</td>
      <td className="event-column">
        <div className="event-title">
          {event.description}
        </div>
        <div className="event-description">
          {event.title}
        </div>
      </td>
      <td className="number-column">
        <div className="number-with-heart">
          <img
            src={heart}
            alt="Избранное"
            className="heart-icon"
          />
          <span className="participant-number">{event.countLikes}</span>
        </div>
      </td>
      <td className="participants-column">
        {event.names.map((name, nameIndex) => (
          <div key={nameIndex} className="participant-name">{name}</div>
        ))}
      </td>
      <td className="registration-column">
        <button
          disabled={event.registrationDisabled}
          className="registration-button"
          onClick={onRegisterClick}
        >
          Зарегистрироваться
        </button>
      </td>
    </tr>
  );
};