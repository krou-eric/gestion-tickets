import React from 'react';

function TicketDetails({ ticket }) {
  return (
    <div className="ticket-detail">
      <p><strong>ID :</strong> #{ticket.id}</p>
      <p><strong>Titre :</strong> {ticket.titre}</p>
      <p><strong>Description :</strong> {ticket.description}</p>
      {ticket.utilisateur && (
        <p><strong>Utilisateur :</strong> {ticket.utilisateur.nom} ({ticket.utilisateur.email})</p>
      )}
    </div>
  );
}

export default TicketDetails;