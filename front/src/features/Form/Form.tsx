import type { FC } from "react";
import { useState, useEffect } from "react"; // убрали useCallback
import './Form.css';

type EventFormat = 'online' | 'offline';

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
}

const EVENT_TITLE = "Запись на мероприятие";
const EVENT_SUBTITLE = "Выберите необходимые параметры мероприятия";
const EVENT_NAME = "Веницианский карнавал танцев и богохульных плясок: смотрим вместе";
const EVENT_AGE = "К посещению приглашаются сотрудники 18+";

const FORMAT_OPTIONS: { value: EventFormat; label: string }[] = [
  { value: 'online', label: 'Онлайн' },
  { value: 'offline', label: 'Оффлайн: офис Нагатино' }
];
const ATTENDEE_LABEL = "Кто пойдет на мероприятие";
const ATTENDEE_PLACEHOLDER = "Логин или имя сотрудника";
const COMMENT_LABEL = "Комментарий";
const COMMENT_PLACEHOLDER = "Дополнительная информация";
const REGISTER_BUTTON_TEXT = "Зарегистрироваться";
const CANCEL_BUTTON_TEXT = "Отменить";

export const Form: FC<FormProps> = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  const [format, setFormat] = useState<EventFormat>('online');

  useEffect(() => {
    if (isOpen) {
      setIsActive(true);
    } else {
      const timeout = setTimeout(() => setIsActive(false), 300);
      return () => clearTimeout(timeout);
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

  const handleFormatChange = (newFormat: EventFormat) => {
    setFormat(newFormat);
  };

  if (!isActive) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-closing'}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div className="event-registration">
        <button 
          className="close-btn" 
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          &#x2716;
        </button>
        
        <h1 className="event-title-modal">{EVENT_TITLE}</h1>
        <p className="event-subtitle">{EVENT_SUBTITLE}</p>

        <div className="event-info">
          <p className="event-name">{EVENT_NAME}</p>
          <p className="event-age">{EVENT_AGE}</p>
        </div>

        <div className="event-format">
          {FORMAT_OPTIONS.map((option) => (
            <button 
              key={option.value}
              className={`format-option ${format === option.value ? 'active' : ''}`}
              onClick={() => handleFormatChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="attendee-field">
          <p className="field-label">{ATTENDEE_LABEL}</p>
          <input
            type="text"
            className="text-input"
            placeholder={ATTENDEE_PLACEHOLDER}
          />
        </div>
        
        <div className="comment-field">
          <p className="field-label">{COMMENT_LABEL}</p>
          <textarea
            className="text-area"
            placeholder={COMMENT_PLACEHOLDER}
          ></textarea>
        </div>
        
        <div className="action-buttons">
          <button className="register-btn">{REGISTER_BUTTON_TEXT}</button>
          <button className="cancel-btn" onClick={onClose}>
            {CANCEL_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};