import type { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import type { RootState } from "../../store/store"; 
import type { AppDispatch } from "../../store/store";
import { toggleTheme } from "../../store/slices/themeSlice";
import ButtonUI from "../../UI/ButtonUI";



const ThemeToggleButton:FC = () => {
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
      <ButtonUI handle={handleThemeToggle}>
          {isDark ? 'Светлая тема' : 'Темная тема'}
      </ButtonUI>
    )
}

export default ThemeToggleButton;