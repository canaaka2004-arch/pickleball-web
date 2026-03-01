import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { getTranslations } from '../translations';

// Mock data for rankings
const intermediateRankings = [
  { rank: 1, name: 'Nguyễn Văn An', points: 2450 },
  { rank: 2, name: 'Trần Minh Hoàng', points: 2380 },
  { rank: 3, name: 'Lê Thị Mai', points: 2320 },
  { rank: 4, name: 'Phạm Đức Huy', points: 2280 },
  { rank: 5, name: 'Võ Thanh Tùng', points: 2245 },
  { rank: 6, name: 'Ngô Quốc Bảo', points: 2210 },
  { rank: 7, name: 'Đặng Thị Hương', points: 2185 },
  { rank: 8, name: 'Bùi Văn Nam', points: 2150 },
  { rank: 9, name: 'Hoàng Minh Tuấn', points: 2120 },
  { rank: 10, name: 'Lý Thị Lan', points: 2095 },
  { rank: 11, name: 'Trương Văn Đạt', points: 2070 },
  { rank: 12, name: 'Mai Thanh Hà', points: 2045 },
  { rank: 13, name: 'Đinh Quang Vinh', points: 2020 },
  { rank: 14, name: 'Phan Thị Ngọc', points: 1995 },
  { rank: 15, name: 'Vũ Đình Long', points: 1970 },
  { rank: 16, name: 'Nguyễn Thu Trang', points: 1945 },
  { rank: 17, name: 'Lê Văn Phúc', points: 1920 },
  { rank: 18, name: 'Trần Thị Yến', points: 1895 },
  { rank: 19, name: 'Phạm Minh Khoa', points: 1870 },
  { rank: 20, name: 'Đỗ Thị Hạnh', points: 1845 },
];

const advancedRankings = [
  { rank: 1, name: 'Trần Quốc Việt', points: 3850 },
  { rank: 2, name: 'Nguyễn Thành Công', points: 3720 },
  { rank: 3, name: 'Lê Đình Phong', points: 3680 },
  { rank: 4, name: 'Võ Minh Tâm', points: 3620 },
  { rank: 5, name: 'Phạm Thị Hồng', points: 3580 },
  { rank: 6, name: 'Hoàng Văn Hải', points: 3540 },
  { rank: 7, name: 'Ngô Thị Linh', points: 3500 },
  { rank: 8, name: 'Đặng Minh Đức', points: 3460 },
  { rank: 9, name: 'Bùi Thị Mai Anh', points: 3420 },
  { rank: 10, name: 'Trương Quang Huy', points: 3380 },
  { rank: 11, name: 'Mai Văn Toàn', points: 3340 },
  { rank: 12, name: 'Đinh Thị Ngân', points: 3300 },
  { rank: 13, name: 'Phan Văn Dũng', points: 3260 },
  { rank: 14, name: 'Vũ Thị Thanh', points: 3220 },
  { rank: 15, name: 'Nguyễn Hữu Thắng', points: 3180 },
  { rank: 16, name: 'Lê Thị Thảo', points: 3140 },
  { rank: 17, name: 'Trần Văn Khải', points: 3100 },
  { rank: 18, name: 'Phạm Thị Diệu', points: 3060 },
  { rank: 19, name: 'Đỗ Văn Quân', points: 3020 },
  { rank: 20, name: 'Ngô Minh Châu', points: 2980 },
];

const RankingPage = ({ language }) => {
  const t = getTranslations(language);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="rank-icon gold" size={20} />;
    if (rank === 2) return <Medal className="rank-icon silver" size={20} />;
    if (rank === 3) return <Medal className="rank-icon bronze" size={20} />;
    return null;
  };

  const RankingTable = ({ data, title }) => (
    <div className="ranking-table-container">
      <h2 className="ranking-table-title">{title}</h2>
      <div className="ranking-table">
        <div className="ranking-header">
          <div className="rank-col">{t.ranking.rank}</div>
          <div className="player-col">{t.ranking.player}</div>
          <div className="points-col">{t.ranking.points}</div>
        </div>
        <div className="ranking-body">
          {data.map((player) => (
            <div 
              key={player.rank} 
              className={`ranking-row ${player.rank <= 3 ? 'top-three' : ''}`}
            >
              <div className="rank-col">
                <span className="rank-number">{player.rank}</span>
                {getRankIcon(player.rank)}
              </div>
              <div className="player-col">
                <span className="player-name">{player.name}</span>
              </div>
              <div className="points-col">
                <span className="points-value">{player.points.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ranking-page">
      <div className="page-hero">
        <h1 className="page-title">{t.ranking.title}</h1>
        <p className="page-subtitle">{t.ranking.subtitle}</p>
      </div>

      <div className="ranking-container">
        <div className="ranking-grid">
          <section className="ranking-section fade-in-section">
            <RankingTable data={intermediateRankings} title={t.ranking.intermediate} />
          </section>
          <section className="ranking-section fade-in-section">
            <RankingTable data={advancedRankings} title={t.ranking.advanced} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RankingPage;
