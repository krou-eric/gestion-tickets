import React, { useState } from 'react';
import { createUser } from '../api';
import { Link } from 'react-router-dom';

function CreateUserPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ nom, email });
      setMessage(`Utilisateur créé avec l'ID : ${response.data.id}`);
      setIsError(false);
      setNom('');
      setEmail('');
    } catch (error) {
      setMessage("Erreur lors de la création de l'utilisateur.");
      setIsError(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">POC MGN</span>
      </nav>

      <div className="page-container">
        <Link to="/" className="btn btn-back">← Retour</Link>
        <div className="card">
          <h2>👤 Créer un utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom</label>
              <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Ex: Jean Dupont" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex: jean@mail.com" required />
            </div>
            <button type="submit" className="btn btn-primary">Créer l'utilisateur</button>
          </form>
          {message && (
            <div className={`alert ${isError ? 'alert-error' : 'alert-success'}`}>{message}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateUserPage;