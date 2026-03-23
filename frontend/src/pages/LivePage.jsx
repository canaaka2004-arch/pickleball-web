import React, { useState, useEffect } from 'react';
import { Radio, Clock, CheckCircle } from 'lucide-react';
import { getTranslations } from '../translations';


const mockMatches = [
  
];

const LivePage = ({ language }) => {
  const t = getTranslations(language);
  const [matches, setMatches] = useState(mockMatches);
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      setMatches(prev => prev.map(match => {
        if (match.status === 'live' && Math.random() > 0.7) {
          const updateA = Math.random() > 0.5;
          return {
            ...match,
            scoreA: updateA ? Math.min(match.scoreA + 1, 11) : match.scoreA,
            scoreB: !updateA ? Math.min(match.scoreB + 1, 11) : match.scoreB
          };
        }
        return match;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'live':
        return (
          <span className="status-badge live-badge">
            <Radio className="pulse-icon" size={14} />
            {t.live.status.live}
          </span>
        );
      case 'finished':
        return (
          <span className="status-badge finished-badge">
            <CheckCircle size={14} />
            {t.live.status.finished}
          </span>
        );
      case 'upcoming':
        return (
          <span className="status-badge upcoming-badge">
            <Clock size={14} />
            {t.live.status.upcoming}
          </span>
        );
      default:
        return null;
    }
  };

  const liveMatches = matches.filter(m => m.status === 'live');
  const finishedMatches = matches.filter(m => m.status === 'finished');
  const upcomingMatches = matches.filter(m => m.status === 'upcoming');

  return (
    <div className="live-page">
      <div className="page-hero">
        <h1 className="page-title">{t.live.title}</h1>
        <p className="page-subtitle">{t.live.subtitle}</p>
        <div className="live-time">
          {currentTime.toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US')}
        </div>
      </div>

      <div className="live-container">
        {}
        {liveMatches.length > 0 && (
          <section className="live-section fade-in-section">
            <h2 className="live-section-title">
              <Radio className="section-icon pulse-icon" size={24} />
              {t.live.status.live}
            </h2>
            <div className="matches-grid">
              {liveMatches.map((match) => (
                <div key={match.id} className="match-card live-match">
                  <div className="match-header">
                    <span className="court-badge">{t.live.court} {match.court}</span>
                    {getStatusBadge(match.status)}
                    <span className="category-badge">{match.category}</span>
                  </div>
                  <div className="match-players">
                    <div className={`player ${match.scoreA > match.scoreB ? 'leading' : ''}`}>
                      <span className="player-name">{match.playerA}</span>
                      <span className="player-score">{match.scoreA}</span>
                    </div>
                    <div className="vs-divider">{t.live.vs}</div>
                    <div className={`player ${match.scoreB > match.scoreA ? 'leading' : ''}`}>
                      <span className="player-name">{match.playerB}</span>
                      <span className="player-score">{match.scoreB}</span>
                    </div>
                  </div>
                  <div className="match-set">Set {match.set}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {}
        {upcomingMatches.length > 0 && (
          <section className="live-section fade-in-section">
            <h2 className="live-section-title">
              <Clock className="section-icon" size={24} />
              {t.live.status.upcoming}
            </h2>
            <div className="matches-grid">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="match-card upcoming-match">
                  <div className="match-header">
                    <span className="court-badge">{t.live.court} {match.court}</span>
                    {getStatusBadge(match.status)}
                    <span className="category-badge">{match.category}</span>
                  </div>
                  <div className="match-players">
                    <div className="player">
                      <span className="player-name">{match.playerA}</span>
                      <span className="player-score">-</span>
                    </div>
                    <div className="vs-divider">{t.live.vs}</div>
                    <div className="player">
                      <span className="player-name">{match.playerB}</span>
                      <span className="player-score">-</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {}
        {finishedMatches.length > 0 && (
          <section className="live-section fade-in-section">
            <h2 className="live-section-title">
              <CheckCircle className="section-icon" size={24} />
              {t.live.status.finished}
            </h2>
            <div className="matches-grid">
              {finishedMatches.map((match) => (
                <div key={match.id} className="match-card finished-match">
                  <div className="match-header">
                    <span className="court-badge">{t.live.court} {match.court}</span>
                    {getStatusBadge(match.status)}
                    <span className="category-badge">{match.category}</span>
                  </div>
                  <div className="match-players">
                    <div className={`player ${match.scoreA > match.scoreB ? 'winner' : ''}`}>
                      <span className="player-name">{match.playerA}</span>
                      <span className="player-score">{match.scoreA}</span>
                    </div>
                    <div className="vs-divider">{t.live.vs}</div>
                    <div className={`player ${match.scoreB > match.scoreA ? 'winner' : ''}`}>
                      <span className="player-name">{match.playerB}</span>
                      <span className="player-score">{match.scoreB}</span>
                    </div>
                  </div>
                  <div className="match-set">Set {match.set}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {matches.length === 0 && (
          <div className="no-matches">
            <p>{t.live.noMatches}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePage;
