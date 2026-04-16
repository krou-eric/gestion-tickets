import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">POC MGN</span>
      </nav>

      <div className="page-container">
        <div className="card">
          <h1>Gestion des Tickets</h1>
          <p style={{ color: '#6B778C', marginBottom: '0.5rem' }}>
            Application de gestion des tickets — Stage BTS SIO SLAM
          </p>

          <div className="home-grid">
            <Link to="/create-user" className="home-btn">
            Créer un utilisateur
            </Link>
            <Link to="/users" className="home-btn">
              Voir les utilisateurs
            </Link>
            <Link to="/tickets" className="home-btn">
              Gérer les tickets
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}