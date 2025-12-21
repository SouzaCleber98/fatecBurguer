import { createContext } from 'react';

// ---------- Types ----------
export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
};

// ---------- Context ----------
const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
