import React, { useState } from 'react';
import { Trophy, TrendingUp, Award } from 'lucide-react';
import { players } from '../mockData';

const Rankings = ({ language }) => {
  const [filterProvince, setFilterProvince] = useState('all');

  const content = {
    vi: {
      title: 'Bảng Xếp Hạng Vận Động Viên',
      subtitle: 'Thứ hạng các vận động viên xuất sắc nhất Việt Nam',
      filter: 'Lọc theo tỉnh/thành',
      all: 'Tất cả',
      rank: 'Hạng',
      name: 'Tên VĐV',
      province: 'Tỉnh/Thành',
      points: 'Điểm',
      tournaments: 'Số giải',
      wins: 'Vô địch'
    },
    en: {
      title: 'Player Rankings',
      subtitle: 'Top athletes in Vietnam',
      filter: 'Filter by province',
      all: 'All',
      rank: 'Rank',
      name: 'Name',
      province: 'Province',
      points: 'Points',
      tournaments: 'Tournaments',
      wins: 'Wins'
    }
  };

  const t = content[language];

  const provinces = [...new Set(players.map(p => p.province))];
  
  const filteredPlayers = filterProvince === 'all' 
    ? players 
    : players.filter(p => p.province === filterProvince);

  const getMedalIcon = (rank) => {
    if (rank === 1) return <Trophy className="medal-icon gold" size={24} />;
    if (rank === 2) return <Award className="medal-icon silver" size={24} />;
    if (rank === 3) return <Award className="medal-icon bronze" size={24} />;
    return null;
  };

  return (
    <div className="rankings-page">
      <div className="page-hero">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-subtitle">{t.subtitle}</p>
      </div>

      <div className="page-container">
        {/* Filter */}
        <div className="filter-bar">
          <div className="filter-group">
            <TrendingUp size={20} />
            <label>{t.filter}:</label>
            <select 
              value={filterProvince} 
              onChange={(e) => setFilterProvince(e.target.value)}
              className="filter-select"
            >
              <option value="all">{t.all}</option>
              {provinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="rankings-container">
          <div className="rankings-table">
            <div className="table-header">
              <div className="th rank-col">{t.rank}</div>
              <div className="th name-col">{t.name}</div>
              <div className="th province-col">{t.province}</div>
              <div className="th points-col">{t.points}</div>
              <div className="th tournaments-col">{t.tournaments}</div>
              <div className="th wins-col">{t.wins}</div>
            </div>
            
            <div className="table-body">
              {filteredPlayers.map((player) => (
                <div key={player.id} className={`table-row ${player.rank <= 3 ? 'top-three' : ''}`}>
                  <div className="td rank-col">
                    <div className="rank-display">
                      {getMedalIcon(player.rank)}
                      <span className="rank-number">{player.rank}</span>
                    </div>
                  </div>
                  <div className="td name-col">
                    <span className="player-name">{player.name}</span>
                  </div>
                  <div className="td province-col">{player.province}</div>
                  <div className="td points-col">
                    <span className="points-value">{player.points.toLocaleString()}</span>
                  </div>
                  <div className="td tournaments-col">{player.tournaments}</div>
                  <div className="td wins-col">
                    <span className="wins-badge">{player.wins}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
