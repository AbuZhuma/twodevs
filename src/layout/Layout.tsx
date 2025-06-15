import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Alert from './alert/Alert';

const Layout: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className={styles.layout}>
      <Alert />
      <Header />
      <main className={styles.main_content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;