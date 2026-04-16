import React from 'react';

function UserDetails({ user, tickets }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Infos Utilisateur'),
    React.createElement('p', null, `Nom: ${user.name}`),
    React.createElement('p', null, `Email: ${user.email}`),
    React.createElement('h3', null, 'Tickets'),
    React.createElement(
      'ul',
      null,
      tickets.map((ticket) =>
        React.createElement('li', { key: ticket.id }, `#${ticket.id} - ${ticket.title}`)
      )
    )
  );
}

export default UserDetails;