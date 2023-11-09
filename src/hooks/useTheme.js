import { useState, useDebugValue } from 'react';

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  useDebugValue(`theme ${darkTheme ? 'dark' : 'light'}`);
  const toggleTheme = () => setDarkTheme(!darkTheme);
  return { darkTheme, toggleTheme };
}
