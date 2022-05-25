import { createContext, ReactNode, useState } from "react";
import { verifyTheme } from "../Utils/colorScheme";

type ThemeProps = {
  children: ReactNode;
};

type ThemeType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialValue = { theme: verifyTheme(), setTheme: () => {} };

export const Theme = createContext<ThemeType>(initialValue);

export function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState(initialValue.theme);

  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
}
