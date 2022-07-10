import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ThemeProps = {
  children: ReactNode;
};

type ThemeType = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
};

type Theme = 'dark' | 'light';

const Theme = createContext<ThemeType>({} as ThemeType);

export function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const actualTheme = localStorage.getItem('theme');

    if (!actualTheme) {
      toggleTheme('dark');
      return;
    }

    setTheme(actualTheme as Theme);
  }, []);

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(Theme);
  return context;
};
