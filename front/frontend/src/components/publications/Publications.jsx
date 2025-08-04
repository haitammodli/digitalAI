import React, { useState } from 'react';
import './Publications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faSearch,
  faCalendarAlt,
  faImage,
  faEye,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const platforms = ['Instagram', 'Twitter', 'LinkedIn', 'Facebook'];

const recentPosts = [
  {
    status: 'Publié',
    emoji: '🚀',
    title: "Découvrez comment l'IA révolutionne le marketing",
    platforms: ['Instagram', 'Twitter'],
    interactions: '1.2k interactions',
  },
  {
    status: 'Programmé',
    emoji: '💡',
    title: 'Guide complet pour optimiser votre stratégie de contenu',
    platforms: ['LinkedIn'],
    schedule: 'Dans 2h',
  },
  {
    status: 'Brouillon',
    emoji: '🎯',
    title: 'Les tendances marketing à suivre en 2024',
    platforms: ['Facebook', 'Twitter'],
    interactions: '-',
  },
];

const PublicationPage = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const charCount = content.length;

  return (
    <div className="publication-page-container">
      {/* Top bar */}
      <header className="top-bar">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Rechercher..." />
        </div>
        <div className="header-right">
          <button className="btn-suggestions">Afficher suggestions IA</button>
          <FontAwesomeIcon icon={faBell} className="icon-bell" />
          <div className="user-avatar">JD</div>
        </div>
      </header>

      {/* Publications Section */}
      <section className="publications-section">
        <h2>Publications</h2>

        {/* Create Publication Form */}
        <form
          className="create-publication"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <h3>
            + Créer une publication{' '}
            <small>Rédigez votre contenu et sélectionnez les plateformes</small>
          </h3>

          <label htmlFor="content">Contenu</label>
          <textarea
            id="content"
            placeholder="Qu est-ce que vous voulez partager aujourd'hui ?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={300}
            rows={5}
          />
          <div className="char-count">
            {charCount} caractères
            <span className="char-optimal">Optimal : 150-300 caractères</span>
          </div>

          <div className="platforms">
            {platforms.map((platform) => (
              <button
                key={platform}
                type="button"
                className={`platform-btn ${
                  selectedPlatforms.includes(platform) ? 'selected' : ''
                }`}
                onClick={() => togglePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>

          <div className="actions">
            <button className="btn-publish" type="submit" disabled={!content}>
              Publier maintenant
            </button>
            <button
              type="button"
              className="icon-btn"
              title="Planifier publication"
              aria-label="Planifier publication"
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
            </button>
            <button
              type="button"
              className="icon-btn"
              title="Ajouter une image"
              aria-label="Ajouter une image"
            >
              <FontAwesomeIcon icon={faImage} />
            </button>
          </div>
        </form>

        {/* Recent Publications */}
        <section className="recent-publications">
          <h3>Publications récentes</h3>
          <p>Gérez vos publications existantes</p>

          {recentPosts.map((post, idx) => (
            <div className="recent-post" key={idx}>
              <span className={`post-status ${post.status.toLowerCase()}`}>
                {post.status}
              </span>
              <div className="post-title">
                <span className="emoji">{post.emoji}</span>
                {post.title}
              </div>
              <div className="post-meta">
                <span className="post-platforms">
                  {post.platforms.join(', ')}
                </span>
                <span className="post-extra">
                  {post.interactions
                    ? post.interactions
                    : post.schedule
                    ? post.schedule
                    : ''}
                </span>
              </div>
              <div className="post-actions">
                <button
                  title="Voir"
                  className="action-btn"
                  aria-label="Voir publication"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  title="Modifier"
                  className="action-btn"
                  aria-label="Modifier publication"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  title="Supprimer"
                  className="action-btn delete"
                  aria-label="Supprimer publication"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default PublicationPage;