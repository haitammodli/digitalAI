import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <div className="logo-box">🟪</div>
          <h1>DailyPost</h1>
          <p className="subtitle">Rejoignez notre plateforme IA</p>
        </div>

        <form onSubmit={handleRegister}>
          <h2>Créer un compte</h2>
          <p className="access-text">Commencez votre aventure maintenant</p>

          <label>Nom d'utilisateur</label>
          <div className="input-wrapper">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <label>Email</label>
          <div className="input-wrapper">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Mot de passe</label>
          <div className="input-wrapper">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <button type="submit" className="login-button">Créer un compte</button>

          <p className="signup-link">
            Déjà inscrit ? <Link to="/login">Se connecter</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
