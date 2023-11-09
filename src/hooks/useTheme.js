import { useState, useDebugValue } from 'react';

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  useDebugValue(`${darkTheme ? 'dark' : 'light'}`, (val) => {
    if (val == 'dark') {
      return 'The theme is dark';
    } else {
      return 'The theme is light';
    }
  });
  const toggleTheme = () => setDarkTheme(!darkTheme);
  return { darkTheme, toggleTheme };
}
