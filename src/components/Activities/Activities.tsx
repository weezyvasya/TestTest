import type { FC } from "react";
import { useState, useEffect } from "react";
import Api from "../../api";
import type { Event } from "../../types"; 
import './Activities.css';
import heart from '../../img/heart.svg';

interface ActivitiesProps {
  onRegisterClick: () => void;
}

export const Activities: FC<ActivitiesProps> = ({ onRegisterClick }) => {
  const [events, setEvents] = useState<Event[]>([]); 
  // useSelector((store)=> store.events) --> initinatState

  // useDispath() --> dispath(getEvents('api/data'))
  const [activeCategory, setActiveCategory] = useState<string>('IT Academy');

  useEffect(() => {
    const fetchEvents = async () => {
      const api = new Api();
      try {
        const data = await api.get<Event[]> ('api/data');

        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const categories = ['IT Academy', 'Маркетинг', 'Retail', 'Остальные'];

  return (
    <section className="all-events">
      <div className="container">
        <div className="all-events-main">
          <div className="all-events-main-title">
            <h2>Все мероприятия</h2>
          </div>
          <nav className="all-events-choice">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'all-events-choice_selected' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
          <div className="all-events-it">
            <table className="events-table">
              <tbody className="table-root">
                {events.map((event, index) => (
                  <tr key={index}>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
// 13 строка удалить + переделать use effect с функций get из слайса


