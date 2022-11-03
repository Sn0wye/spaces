import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

type ThemeProps = {
  children: ReactNode;
};

type Theme = 'dark' | 'light';

type ThemeType = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeType>({} as ThemeType);

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
