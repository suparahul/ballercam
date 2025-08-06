import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { group414Icon, group259817Icon, mdiAccountCircleIcon } from '../../../assets/images';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.logoIconInner}>
                <img
                  alt="BallerCam Logo Icon"
                  className={styles.logoIconImg}
                  src={group414Icon}
                />
              </div>
            </div>
            <div className={styles.logoText}>
              <img
                alt="BallerCam Logo Text"
                className={styles.logoTextImg}
                src={group259817Icon}
              />
            </div>
          </div>
          
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <p>TEAM home</p>
            </div>
            <div className={`${styles.navItem} ${styles.active}`}>
              <p>GAMES</p>
            </div>
            <div className={styles.navItem}>
              <p>ROSTER</p>
            </div>
            <div className={styles.navItem}>
              <p>CLIPS</p>
            </div>
          </div>
        </div>
        
        <div className={styles.navRight}>
          <div className={styles.userProfile}>
            <img
              alt="User Profile"
              className={styles.userProfileImg}
              src={mdiAccountCircleIcon}
            />
          </div>
          
          <button 
            className={styles.hamburgerButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavItems}>
            <div className={styles.mobileNavItem}>
              <p>TEAM home</p>
            </div>
            <div className={`${styles.mobileNavItem} ${styles.active}`}>
              <p>GAMES</p>
            </div>
            <div className={styles.mobileNavItem}>
              <p>ROSTER</p>
            </div>
            <div className={styles.mobileNavItem}>
              <p>CLIPS</p>
            </div>
          </div>
          
          <div className={styles.mobileUserProfile}>
            <img
              alt="User Profile"
              className={styles.userProfileImg}
              src={mdiAccountCircleIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation; 