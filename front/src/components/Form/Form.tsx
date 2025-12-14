import type { FC } from "react";
import { useState, useEffect } from "react";
import './Form.css';

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const Form: FC<FormProps> = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [format, setFormat] = useState<'online' | 'offline'>('online');




  useEffect(() => {
    if (isOpen) {
      setIsActive(true);
    } else {
      setTimeout(() => setIsActive(false), 300);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isActive) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-closing'}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className="event-registration">
        <div className="close-btn" onClick={onClose}>
          &#x2716;
        </div>
        <h1 className="event-title-modal">Запись на мероприятие</h1>

        <p className="event-subtitle">Выберите необходимые параметры мероприятия</p>

        <div className="event-info">
          <p className="event-name">
            Веницианский карнавал танцев и богохульных плясок: смотрим вместе
          </p>
          <p className="event-age">К посещению приглашаются сотрудники 18+</p>
        </div>

        <div className="event-format">
          <button 
            className={`format-option ${format === 'online' ? 'active' : ''}`}
            onClick={() => setFormat('online')}
          >
            Онлайн
          </button>
          <button 
            className={`format-option ${format === 'offline' ? 'active' : ''}`}
            onClick={() => setFormat('offline')}
          >
            Оффлайн: офис Нагатино
          </button>
        </div>
        <div className="attendee-field">
          <p className="field-label">Кто пойдет на мероприятие</p>
          <input
            type="text"
            className="text-input"
            placeholder="Логин или имя сотрудника"
          />
        </div>
        <div className="comment-field">
          <p className="field-label">Комментарий</p>
          <textarea
            className="text-area"
            placeholder="Дополнительная информация"
          ></textarea>
        </div>
        <div className="action-buttons">
          <button className="register-btn">Зарегистрироваться</button>
          <button className="cancel-btn" onClick={onClose}>Отменить</button>
        </div>
      </div>
    </div>
  );
};