import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return {
    setTheme,
    theme,
    toggleTheme,
  };
};
