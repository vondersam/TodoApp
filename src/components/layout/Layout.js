import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const layoutVersion = 'Layout version 2.0';
  return (
    <div className="container" data-theme={props.darkTheme ? 'dark' : 'light'}>
      <Header {...props} layoutVersion={layoutVersion} />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
