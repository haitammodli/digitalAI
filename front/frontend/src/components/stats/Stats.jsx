import React, { useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { key: 'overview', label: "Vue d'ensemble" },
    { key: 'platforms', label: 'Plateformes' },
    { key: 'content', label: 'Contenu' },
    { key: 'audience', label: 'Audience' }
  ];

  return (
    <div className="stats-container">
      <div className="stats-header">
        <div>
          <h1>Statistiques</h1>
          <p>Analysez vos performances et optimisez votre stratégie</p>
        </div>
        <div className="stats-controls">
          <button>Derniers 30 jours</button>
          <button>Exporter</button>
        </div>
      </div>

      <div className="stats-cards">
        {/* Stat cards (always visible) */}
        <div className="stat-card">
          <h3>12.4k <span className="green">+23%</span></h3>
          <p>Engagement total</p>
          <small>Likes, commentaires, partages</small>
        </div>
        <div className="stat-card">
          <h3>45.2k <span className="green">+18%</span></h3>
          <p>Portée</p>
          <small>Personnes atteintes</small>
        </div>
        <div className="stat-card">
          <h3>1.2k <span className="green">+12%</span></h3>
          <p>Nouveaux abonnés</p>
          <small>Cette semaine</small>
        </div>
        <div className="stat-card">
          <h3>4.7% <span className="green">+0.8%</span></h3>
          <p>Taux d'engagement</p>
          <small>Moyenne des plateformes</small>
        </div>
      </div>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* === ONLY weekly-chart changes based on tab === */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="weekly-chart">
            <h3>Évolution hebdomadaire</h3>
            <p>Engagement et portée des 7 derniers jours</p>
            <div className="bars">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, idx) => (
                <div key={day} className="bar-item">
                  <div className="engagement-bar bar" style={{ height: `${80 - idx * 5}px` }}></div>
                  <div className="reach-bar bar" style={{ height: `${40 + idx * 3}px` }}></div>
                  <span>{day}</span>
                </div>
              ))}
            </div>
            <div className="legend">
              <span className="dot blue"></span> Engagement
              <span className="dot purple"></span> Portée
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="weekly-chart">
            <h3>Performance par plateforme</h3>
            <p>Comparez Instagram, LinkedIn, Twitter, etc.</p>
            {/* Replace with chart or dummy content */}
          </div>
        )}

        {activeTab === 'content' && (
          <div className="weekly-chart">
            <h3>Analyse de contenu</h3>
            <p>Taux de clics, visuels, vidéos, textes, etc.</p>
            {/* Replace with relevant data */}
          </div>
        )}

        {activeTab === 'audience' && (
          <div className="weekly-chart">
            <h3>Données démographiques</h3>
            <p>Tranche d’âge, genre, localisation</p>
            {/* Replace with graph/map/etc. */}
          </div>
        )}
      </div>

      {/* === Always visible: Top posts === */}
      <div className="top-posts">
        <h3>Publications les plus performantes</h3>
        <p>Vos meilleurs contenus de la semaine</p>

        <div className="post">
          <div>
            <h4>#1 Les tendances design 2024</h4>
            <span className="platform">Instagram</span> · Il y a 3 jours · ❤️ 2.4k 👁 12.1k
          </div>
          <span className="badge excellent">Excellent</span>
        </div>

        <div className="post">
          <div>
            <h4>#2 Guide React avancé</h4>
            <span className="platform">LinkedIn</span> · Il y a 5 jours · ❤️ 1.8k 👁 8.5k
          </div>
          <span className="badge very-good">Très bon</span>
        </div>

        <div className="post">
          <div>
            <h4>#3 Tips productivité</h4>
            <span className="platform">Twitter</span> · Il y a 1 semaine · ❤️ 945 👁 5.2k
          </div>
          <span className="badge good">Bon</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
