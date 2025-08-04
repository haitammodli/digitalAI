import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCalendar,
  faFileAlt,
  faCog,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo-box">🟪</div>
        <h1 className="brand-name">DailyPost</h1>
      </div>

      <nav className="nav-menu">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FontAwesomeIcon icon={faChartLine} /> Tableau de bord
        </NavLink>
        <NavLink to="Calendar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FontAwesomeIcon icon={faCalendar} /> Calendrier
        </NavLink>
        <NavLink to="Publications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FontAwesomeIcon icon={faFileAlt} /> Publications
        </NavLink>
        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FontAwesomeIcon icon={faChartBar} /> Statistiques
        </NavLink>
        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FontAwesomeIcon icon={faCog} /> Paramètres
        </NavLink>
      </nav>
    </aside>
  );
};

export default Navbar;
