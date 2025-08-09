import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CM'); // Default role
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8085/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role
        })
      });

      if (response.ok) {
        // ✅ Go to dashboard after successful registration
        navigate("/dashboard");
      } else {
        const err = await response.text();
        alert("Registration failed: " + err);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("An error occurred. Check console.");
    }
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

          <label>Rôle</label>
          <div className="input-wrapper">
            <span className="icon">
              <FontAwesomeIcon icon={faUserShield} />
            </span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-select"
              required
            >
              <option value="CM">Community Manager</option>
              <option value="ADMIN">Admin</option>
            </select>
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
