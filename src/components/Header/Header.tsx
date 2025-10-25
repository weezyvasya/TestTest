import type { FC } from "react";
import './Header.css';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src="./img/Logotype.png" alt="logo" />
      </div>
      <div className="header-right">
        <p className="header-text">Валентин Костин</p>
        <img src="../img/S.png" alt="Валентин Костин" />
        <img src="./img/Exit.svg" alt="выход" />
      </div>
    </header>
  );
};