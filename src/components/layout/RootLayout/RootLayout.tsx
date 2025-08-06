import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';

const RootLayout: React.FC = () => {
  return (
    <div className={styles.rootLayout}>
      <header className={styles.header}>
        <h1>BallerCam</h1>
      </header>
      
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout; 