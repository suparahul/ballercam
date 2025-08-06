import React from 'react';
import styles from './GameScheduleItem.module.css';

interface GameScheduleItemProps {
  date: string;
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

const GameScheduleItem: React.FC<GameScheduleItemProps> = ({
  date,
  team1Name,
  team2Name,
  team1Color,
  team2Color,
}) => {
  return (
    <div className={styles.gameScheduleItem}>
      <div className={styles.date}>{date}</div>
      
      <div className={styles.teams}>
        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            <div 
              className={styles.teamColor}
              style={{ backgroundColor: team1Color }}
            />
            <span className={styles.teamName}>{team1Name}</span>
          </div>
        </div>
        
        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            <div 
              className={styles.teamColor}
              style={{ backgroundColor: team2Color }}
            />
            <span className={styles.teamName}>{team2Name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScheduleItem; 