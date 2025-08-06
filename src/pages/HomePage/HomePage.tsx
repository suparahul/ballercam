import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1>Home Page</h1>
      <p>Welcome to BallerCam</p>
      <Link to="/games" className={styles.gamesLink}>
        Go to Games Page
      </Link>
    </div>
  );
};

export default HomePage; 