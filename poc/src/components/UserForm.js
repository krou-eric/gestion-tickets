import React, { useState } from 'react';
import { createUser, getUserTickets } from '../api';

function UserForm({ onUserCreated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser({ name, email });
      const tickets = await getUserTickets(res.data.id);
      onUserCreated(res.data, tickets.data);
    } catch (err) {
      console.error('Erreur lors de la création de l’utilisateur:', err);
    }
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement('input', {
      type: 'text',
      placeholder: 'Nom',
      value: name,
      onChange: (e) => setName(e.target.value)
    }),
    React.createElement('input', {
      type: 'email',
      placeholder: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value)
    }),
    React.createElement('button', { type: 'submit' }, 'Créer utilisateur')
  );
}

export default UserForm;
