import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const layoutVersion = 'Layout version 2.0';
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className="container" data-theme={darkTheme ? 'dark' : 'light'}>
      <Header layoutVersion={layoutVersion} />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
