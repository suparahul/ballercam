import React from 'react';
import styles from './GamesPage.module.css';
import Navigation from '../../components/layout/Navigation';
import UpcomingGamesWidget from '../../components/games/UpcomingGamesWidget';
import GameCard from '../../components/games/GameCard';
import { gameCardImage } from '../../assets/images';

const GamesPage: React.FC = () => {
  // Mock data for upcoming games
  const upcomingGames = [
    {
      date: 'Tomorrow 8:00 AM',
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      team1Color: '#A0A0F9',
      team2Color: '#141416',
    },
    {
      date: 'May 28 2025 11:15 AM',
      team1Name: 'BU12 SP EXTra',
      team2Name: 'tbd',
      team1Color: '#A0A0F9',
      team2Color: '#F7F7FA',
    },
    {
      date: 'Jun 10 2025 10:15 AM',
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      team1Color: '#A0A0F9',
      team2Color: '#141416',
    },
  ];

  // Mock data for game cards
  const gameCards = [
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      score1: '3',
      score2: '1',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#A0A0F9',
      team2Color: '#75C1E9',
      showPenaltyWin: false,
      showHD: true,
    },
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      score1: '3',
      score2: '3',
      penaltyScore1: '4',
      penaltyScore2: '3',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#75C1E9',
      team2Color: '#A0A0F9',
      showPenaltyWin: true,
      showHD: true,
    },
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'tbd',
      score1: '3',
      score2: '1',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#A0A0F9',
      team2Color: '#75C1E9',
      showPenaltyWin: false,
      showHD: false,
    },
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      score1: '3',
      score2: '3',
      penaltyScore1: '4',
      penaltyScore2: '3',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#75C1E9',
      team2Color: '#A0A0F9',
      showPenaltyWin: true,
      showHD: true,
    },
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'south torrance hall',
      score1: '3',
      score2: '1',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#A0A0F9',
      team2Color: '#75C1E9',
      showPenaltyWin: false,
      showHD: false,
    },
    {
      team1Name: 'BU12 SP EXTra',
      team2Name: 'tbd',
      score1: '3',
      score2: '1',
      date: 'May 24 2025, 9:18 AM',
      duration: '1h 18m',
      imageUrl: gameCardImage,
      team1Color: '#A0A0F9',
      team2Color: '#75C1E9',
      showPenaltyWin: false,
      showHD: true,
    },
  ];

  return (
    <div className={styles.gamesPage}>
      <Navigation />
      
      <div className={styles.mainContent}>
        <div className={styles.leftSidebar}>
          <UpcomingGamesWidget games={upcomingGames} />
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.gamesGrid}>
            {gameCards.map((game, index) => (
              <GameCard
                key={index}
                team1Name={game.team1Name}
                team2Name={game.team2Name}
                score1={game.score1}
                score2={game.score2}
                penaltyScore1={game.penaltyScore1}
                penaltyScore2={game.penaltyScore2}
                date={game.date}
                duration={game.duration}
                imageUrl={game.imageUrl}
                team1Color={game.team1Color}
                team2Color={game.team2Color}
                showPenaltyWin={game.showPenaltyWin}
                showHD={game.showHD}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage; 