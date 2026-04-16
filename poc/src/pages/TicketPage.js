import React, { useState } from 'react';
import { getTicket, createTicket } from '../api';
import TicketDetails from '../components/TicketDetails';
import { Link } from 'react-router-dom';

function TicketPage() {
  const [ticket, setTicket] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [utilisateurId, setUtilisateurId] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await getTicket(searchId);
      setTicket(res.data);
    } catch (err) {
      setTicket(null);
      alert('Ticket non trouvé');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createTicket({ titre, description, utilisateurId: +utilisateurId });
      setMessage('Ticket créé avec succès !');
      setIsError(false);
      setTitre('');
      setDescription('');
      setUtilisateurId('');
    } catch (err) {
      setMessage('Erreur lors de la création du ticket.');
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
          <h2>Créer un ticket</h2>
          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Titre</label>
              <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Ex: Bug de connexion" required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: La page login ne fonctionne pas" required />
            </div>
            <div className="form-group">
              <label>ID Utilisateur</label>
              <input type="number" value={utilisateurId} onChange={(e) => setUtilisateurId(e.target.value)} placeholder="Ex: 1" required />
            </div>
            <button type="submit" className="btn btn-primary">Créer le ticket</button>
          </form>
          {message && (
            <div className={`alert ${isError ? 'alert-error' : 'alert-success'}`}>{message}</div>
          )}
        </div>

        <hr className="divider" />

        <div className="card">
          <h2>Rechercher un ticket par ID</h2>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
              <input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Ex: 1" required />
            </div>
            <button type="submit" className="btn btn-primary">Rechercher</button>
          </form>
          {ticket && <TicketDetails ticket={ticket} />}
        </div>
      </div>
    </>
  );
}

export default TicketPage;