// Dashboard.jsx (your existing code with one small change)
import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHeart, faUsers, faChartLine, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="main-content">
      {/* Everything else stays the same */}
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Tableau de bord</h1>
            <p>Gérez votre présence en ligne avec l'aide de l'IA</p>
          </div>
          <button className="new-post-btn">
            <FontAwesomeIcon icon={faFileAlt} />
            Nouvelle publication
          </button>
        </div>

        <div className="cards-grid">
          <div className="card">
            <div className="card-title">Publications totales</div>
            <div className="card-content">
              <h2>147</h2>
              <span className="growth">+12%</span>
              <FontAwesomeIcon icon={faFileAlt} className="icon" />
            </div>
          </div>

          <div className="card">
            <div className="card-title">Engagement moyen</div>
            <div className="card-content">
              <h2>4.2k</h2>
              <span className="growth">+8%</span>
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
          </div>

          <div className="card">
            <div className="card-title">Portée totale</div>
            <div className="card-content">
              <h2>25.8k</h2>
              <span className="growth">+15%</span>
              <FontAwesomeIcon icon={faUsers} className="icon" />
            </div>
          </div>

          <div className="card">
            <div className="card-title">Taux de croissance</div>
            <div className="card-content">
              <h2>23%</h2>
              <span className="growth">+3%</span>
              <FontAwesomeIcon icon={faChartLine} className="icon" />
            </div>
          </div>
        </div>

        <div className="recent-section">
          <h2>
            <FontAwesomeIcon icon={faBullhorn} className="icon" />
            Publications récentes
          </h2>
          <p>Vos dernières publications et leur performance</p>

          <div className="recent-post">
            <div className="post-info">
              <span className="post-status">Publié</span>
              <span>• Instagram • Il y a 2h</span>
            </div>
            <h4>Les tendances design 2024</h4>
            <span className="likes">❤️ 1.2k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
