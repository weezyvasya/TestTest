import type { FC } from "react";
import './WelcomeComponent.css';

interface WelcomeComponentProps {}

export const WelcomeComponent: FC<WelcomeComponentProps> = () => {
  return (
    <section className="frontend-school">
      <div className="frontend-school-main">
        <h3>Ближайшее мероприятие</h3>
        <h1>Школа по фронтенду</h1>
        <div className="date-location">
          25.05.2020<span>Офис в Нагатино</span>
        </div>
        <button className="signup-button">Записаться на курс</button>
      </div>
    </section>
  );
};