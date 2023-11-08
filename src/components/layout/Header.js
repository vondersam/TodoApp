import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Header = ({ layoutVersion }) => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h2>To-do List</h2>
      <span className="nav-item">
        <input
          type="checkbox"
          checked={darkTheme === true}
          className="theme-toggle-checkbox"
          autoComplete="off"
          id="toggleThemeId"
          onChange={() => {
            toggleTheme();
          }}
        />
        <label htmlFor="toggleThemeId" className="theme-toggle-checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
        <span>{layoutVersion}</span>
      </span>
    </header>
  );
};

export default Header;
