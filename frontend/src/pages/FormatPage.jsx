import React from 'react';
import { getTranslations } from '../translations';

const FormatPage = ({ language }) => {
  const t = getTranslations(language);

  return (
    <div className="format-page">
      <div className="page-hero">
        <h1 className="page-title">{t.format.title}</h1>
        <p className="page-subtitle">{t.format.subtitle}</p>
      </div>

      <div className="format-container">
        {/* Group Stage Section */}
        <section className="format-section fade-in-section">
          <div className="format-card">
            <div className="format-card-header">
              <div className="format-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </div>
              <h2 className="format-card-title">{t.format.groupStage.title}</h2>
            </div>
            <p className="format-description">{t.format.groupStage.description}</p>
            <div className="format-rules">
              {t.format.groupStage.rules.map((rule, index) => (
                <div key={index} className="format-rule-item">
                  <span className="rule-bullet">●</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Knockout Stage Section */}
        <section className="format-section fade-in-section">
          <div className="format-card">
            <div className="format-card-header">
              <div className="format-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h2 className="format-card-title">{t.format.knockout.title}</h2>
            </div>
            <p className="format-description">{t.format.knockout.description}</p>
            <div className="knockout-stages">
              {t.format.knockout.stages.map((stage, index) => (
                <div key={index} className="knockout-stage-item">
                  <span className="stage-number">{index + 1}</span>
                  <span className="stage-name">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bracket Visualization */}
        <section className="format-section bracket-section fade-in-section">
          <h2 className="bracket-title">{t.format.bracket.title}</h2>
          <div className="bracket-container">
            <div className="bracket-round quarter-finals">
              <div className="round-label">{t.format.bracket.quarterFinal}</div>
              <div className="bracket-matches">
                <div className="bracket-match">
                  <div className="bracket-team">Team A1</div>
                  <div className="bracket-team">Team B2</div>
                </div>
                <div className="bracket-match">
                  <div className="bracket-team">Team C1</div>
                  <div className="bracket-team">Team D2</div>
                </div>
                <div className="bracket-match">
                  <div className="bracket-team">Team B1</div>
                  <div className="bracket-team">Team A2</div>
                </div>
                <div className="bracket-match">
                  <div className="bracket-team">Team D1</div>
                  <div className="bracket-team">Team C2</div>
                </div>
              </div>
            </div>

            <div className="bracket-connectors">
              <div className="connector-line"></div>
              <div className="connector-line"></div>
            </div>

            <div className="bracket-round semi-finals">
              <div className="round-label">{t.format.bracket.semiFinal}</div>
              <div className="bracket-matches">
                <div className="bracket-match">
                  <div className="bracket-team placeholder">TBD</div>
                  <div className="bracket-team placeholder">TBD</div>
                </div>
                <div className="bracket-match">
                  <div className="bracket-team placeholder">TBD</div>
                  <div className="bracket-team placeholder">TBD</div>
                </div>
              </div>
            </div>

            <div className="bracket-connectors single">
              <div className="connector-line"></div>
            </div>

            <div className="bracket-round final">
              <div className="round-label">{t.format.bracket.final}</div>
              <div className="bracket-matches">
                <div className="bracket-match final-match">
                  <div className="bracket-team placeholder">TBD</div>
                  <div className="bracket-team placeholder">TBD</div>
                </div>
              </div>
            </div>

            <div className="champion-trophy">
              <div className="trophy-icon">🏆</div>
              <div className="champion-label">{t.format.bracket.champion}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormatPage;
