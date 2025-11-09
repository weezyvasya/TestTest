import type { FC } from "react";
import { useEffect, useState } from "react"; // Добавлен useState
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { getEvents } from "../../store/slices/eventsSlice";
import { EventItem } from "../EventItem/EventItem";
import './Activities.css';
import { AddNewTask } from "../../store/slices/eventsSlice";

interface ActivitiesProps {
  onRegisterClick: () => void;
}

export const Activities: FC<ActivitiesProps> = ({ onRegisterClick }) => {

  const dispatch = useDispatch<AppDispatch>();

  const { events, loading, error, param } = useSelector((state: RootState) => state.events);

  const [activeCategory, setActiveCategory] = useState<string>('IT Academy'); // Теперь работает

  const categories = ['IT Academy', 'Маркетинг', 'Retail', 'Остальные'];

  useEffect(() => {
    dispatch(getEvents('api/data'));
  }, [dispatch]);


  if (loading) {
    return (
      <section className="all-events">
        <div className="container">
          <div className="loading">Загрузка мероприятий...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="all-events">
        <div className="container">
          <div className="error">Ошибка: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="all-events">
      <div className="container">
        <div className="all-events-main">
          <div className="all-events-main-title">
            <h2 onClick={()=> dispatch(AddNewTask(10))}>Все мероприятия {param}</h2>
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
                {events.map((event) => (
                  <EventItem 
                    key={event.id} 
                    event={event} 
                    onRegisterClick={onRegisterClick} 
                  />
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


