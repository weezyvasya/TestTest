import type { FC } from "react";
import logo from '../../img/Logotype.png';
import photoHeader from '../../img/S.png';
import './Header.css';
import exit from '../../img/Exit.svg';
import ThemeToggleButton from "../../features/ThemeToggleButton/ThemeToggleButton";





export const Header: FC = () => {


  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-right">
        <p className="header-text">Валентин Костин</p>
        <ThemeToggleButton/>
        <img src={photoHeader} alt="Валентин Костин" />
        <img src={exit} alt="выход" />
      </div>
    </header>
  );
};