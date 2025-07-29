import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
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
            <span className="icon">📧</span>
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
            <span className="icon">🔒</span>
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
              👁️
            </span>
          </div>

          <a href="#" className="forgot-password">Mot de passe oublié ?</a>

          <button type="submit" className="login-button">Se connecter</button>

         <p className="signup-link">
  Pas encore de compte ? <Link to="/register">Créer un compte</Link>
</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
