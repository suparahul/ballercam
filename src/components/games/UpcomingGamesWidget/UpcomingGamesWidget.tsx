import React from 'react';
import styles from './UpcomingGamesWidget.module.css';
import GameScheduleItem from '../GameScheduleItem';
import { soccerIcon1, soccerIcon2 } from '../../../assets/images';

interface GameSchedule {
  date: string;
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

interface UpcomingGamesWidgetProps {
  games: GameSchedule[];
}

const UpcomingGamesWidget: React.FC<UpcomingGamesWidgetProps> = ({ games }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <img src={soccerIcon1} alt="Soccer" className={styles.soccerIcon1} />
          <img src={soccerIcon2} alt="Soccer" className={styles.soccerIcon2} />
        </div>
        <h3 className={styles.title}>upcoming games</h3>
      </div>
      
      <div className={styles.gamesList}>
        {games.map((game, index) => (
          <GameScheduleItem
            key={index}
            date={game.date}
            team1Name={game.team1Name}
            team2Name={game.team2Name}
            team1Color={game.team1Color}
            team2Color={game.team2Color}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingGamesWidget; 