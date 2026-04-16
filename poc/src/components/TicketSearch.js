// src/components/TicketForm.js
import { useState } from 'react';
import { createTicket } from '../api';

const TicketForm = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [utilisateurId, setUtilisateurId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket({ titre, description, utilisateurId: +utilisateurId });
      alert('Ticket créé !');
    } catch (err) {
      console.error("Erreur création ticket:", err);
      alert("Erreur");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={utilisateurId} onChange={(e) => setUtilisateurId(e.target.value)} placeholder="ID Utilisateur" />
      <button type="submit">Créer</button>
    </form>
  );
};

export default TicketForm;
