import React from 'react';
import styles from './GameCard.module.css';
import { gameCardImage, unionIcon, ellipse207Icon, ballerCamLogo } from '../../../assets/images';

interface GameCardProps {
  team1Name?: string;
  team2Name?: string;
  score1?: string;
  score2?: string;
  penaltyScore1?: string;
  penaltyScore2?: string;
  date?: string;
  duration?: string;
  imageUrl?: string;
  team1Color?: string;
  team2Color?: string;
  showPenaltyWin?: boolean;
  penaltyText?: string;
  showHD?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  team1Name = 'BU12 SP EXTra',
  team2Name = 'south torrance hall',
  score1 = '3',
  score2 = '3',
  penaltyScore1 = '4',
  penaltyScore2 = '3',
  date = 'May 24 2025, 9:18 AM',
  duration = '1h 18m',
  imageUrl = gameCardImage,
  team1Color = '#75c1e9',
  team2Color = '#a0a0f9',
  showPenaltyWin = false,
  penaltyText = 'BU12 SP Extra wins 3-2 in Penalties',
  showHD = true,
}) => {
  return (
    <div className={styles.gameCardExtra}>
      <div className={styles.imageGrid}>
        <div 
          className={styles.gameImage}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        
        {showHD && (
          <div className={styles.hdBadge}>
            <div className={styles.hdBadgeContent}>
              <p>HD</p>
            </div>
          </div>
        )}
        
        <div className={styles.moreButtonContainer}>
          <div className={styles.moreButtonBg}>
            <img src={ellipse207Icon} alt="" />
          </div>
          <div className={styles.moreButton}>
            <div className={styles.moreIcon}>
              <div className={styles.moreIconUnion}>
                <img src={unionIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ballerCamLogo}>
          <div className={styles.logoContainer}>
            <div className={styles.logoContent}>
              <div className={styles.logoImage}>
                <img src={ballerCamLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.durationBadge}>
          <div className={styles.durationContent}>
            <div className={styles.durationText}>
              <p>{duration}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.teamsSection}>
          <div className={styles.teamContainer}>
            <div className={styles.teamsWrapper}>
              <div className={styles.teamRow}>
                <div className={styles.teamInfo}>
                  <div className={styles.colorIndicatorFrame}>
                    <div 
                      className={styles.teamColorIndicator}
                      style={{ backgroundColor: team1Color }}
                    />
                  </div>
                  <div className={styles.teamName}>
                    <p>{team1Name}</p>
                  </div>
                </div>
                <div className={styles.teamScoreContainer}>
                  <div className={styles.teamScore}>
                    <p>
                      <span>{score1}</span>
                      {showPenaltyWin && penaltyScore1 && (
                        <span className={styles.penaltyScore}> ({penaltyScore1})</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.teamContainer}>
            <div className={styles.teamsWrapper}>
              <div className={styles.teamRow}>
                <div className={styles.teamInfo}>
                  <div className={styles.colorIndicatorFrame}>
                    <div 
                      className={styles.teamColorIndicator}
                      style={{ backgroundColor: team2Color }}
                    />
                  </div>
                  <div className={styles.teamName}>
                    <p>{team2Name}</p>
                  </div>
                </div>
                <div className={styles.teamScoreContainer}>
                  <div className={styles.teamScore}>
                    <p>
                      <span>{score2}</span>
                      {showPenaltyWin && penaltyScore2 && (
                        <span className={styles.penaltyScore}> ({penaltyScore2})</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.gameDetails}>
          <div className={styles.gameDate}>
            <p>{date}</p>
          </div>
          {showPenaltyWin && (
            <div className={styles.penaltyText}>
              <p>{penaltyText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;