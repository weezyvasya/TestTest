import type { FC } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { getEvents } from "../../store/slices/eventsSlice";
import { EventItem } from "../../components/EventItem/EventItem";
import './Activities.css';

const CATEGORIES = ['IT Academy', 'Маркетинг', 'Retail', 'Остальные'];
const DEFAULT_CATEGORY = 'IT Academy';

export const Activities: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector((state: RootState) => state.events);
  const [activeCategory, setActiveCategory] = useState<string>(DEFAULT_CATEGORY);

  useEffect(() => {
    dispatch(getEvents('api/data'));
  },);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

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
            <h2>Все мероприятия</h2>
          </div>
          <nav className="all-events-choice">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'all-events-choice_selected' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </nav>
          <div className="all-events-it">
            <table className="events-table">
              <tbody className="table-root">
                {events.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};


