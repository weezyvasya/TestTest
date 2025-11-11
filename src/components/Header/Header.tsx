import type { FC } from "react";
import logo from '../../img/Logotype.png';
import photoHeader from '../../img/S.png';
import './Header.css';
import exit from '../../img/Exit.svg';
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { toggleTheme } from "../../store/slices/themeSlice";
import { useEffect } from "react"; // Добавьте этот импорт

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-right">
        <p className="header-text">Валентин Костин</p>
        <button 
          className="theme-button"
          onClick={handleThemeToggle}
        >
          {isDark ? 'Светлая тема' : 'Темная тема'}
        </button>
        <img src={photoHeader} alt="Валентин Костин" />
        <img src={exit} alt="выход" />
      </div>
    </header>
  );
};