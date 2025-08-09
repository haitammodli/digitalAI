import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8085/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Store JWT token if returned
        localStorage.setItem("token", data.token);

        // Redirect to dashboard or home
        navigate("/dashboard");
      } else {
        const errorText = await response.text();
        console.error("Login failed:", errorText);
        alert("Échec de la connexion : " + errorText);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Une erreur est survenue. Consultez la console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <div className="logo-box">🟪</div>
          <h1>DailyPost</h1>
          <p className="subtitle">Plateforme de gestion alimentée par l'IA</p>
        </div>

        <form onSubmit={handleLogin}>
          <h2>Connexion</h2>
          <p className="access-text">Accédez à votre tableau de bord</p>

          <label>Email</label>
          <div className="input-wrapper">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              placeholder="votre@email.com"
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

          <Link to="/forgot-password" className="forgot-password">Mot de passe oublié ?</Link>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          <p className="signup-link">
            Pas encore de compte ? <Link to="/register">Créer un compte</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
