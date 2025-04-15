import { useContext } from 'react';
import { ThemedContext } from './ThemedContext';

function ThemeSwitchButton() {
  const { theme, setTheme } = useContext(ThemedContext);
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <button type="button" className="btn-toggle" onClick={toggleTheme}>
      切換 {theme} 主題
    </button>
  );
}

export default ThemeSwitchButton;
