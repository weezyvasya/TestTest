import type { FC } from "react";
import './Footer.css';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>&copy; 2024 Paipdaiaen. Все права защищены.</p>
      </div>
    </footer>
  );
};