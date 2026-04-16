import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserTickets } from '../api';
import { Link } from 'react-router-dom';

function UserPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTickets, setLoadingTickets] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (err) {
      console.error('Erreur chargement utilisateurs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
    setLoadingTickets(true);
    try {
      const res = await getUserTickets(user.id);
      setTickets(res.data);
    } catch (err) {
      setTickets([]);
    } finally {
      setLoadingTickets(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">🎫 POC MGN</span>
      </nav>

      <div className="page-container">
        <Link to="/" className="btn btn-back">← Retour</Link>

        <div className="card">
          <h2>👥 Liste des utilisateurs</h2>

          {loading ? (
            <p style={{ color: 'var(--text-light)' }}>Chargement...</p>
          ) : users.length === 0 ? (
            <div className="alert alert-error">Aucun utilisateur trouvé.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Nom</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: selectedUser?.id === user.id ? '#E9F2FF' : 'white',
                    }}
                  >
                    <td style={tdStyle}>#{user.id}</td>
                    <td style={tdStyle}><strong>{user.nom}</strong></td>
                    <td style={tdStyle}>{user.email}</td>
                    <td style={tdStyle}>
                      <button
                        className="btn btn-primary"
                        style={{ padding: '0.3rem 0.9rem', fontSize: '0.85rem' }}
                        onClick={() => handleSelectUser(user)}
                      >
                        Voir tickets
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {selectedUser && (
          <div className="card">
            <h2>🎫 Tickets de {selectedUser.nom}</h2>

            {loadingTickets ? (
              <p style={{ color: 'var(--text-light)' }}>Chargement des tickets...</p>
            ) : tickets.length === 0 ? (
              <div className="alert alert-error">Aucun ticket pour cet utilisateur.</div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Titre</th>
                    <th style={thStyle}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={tdStyle}>#{ticket.id}</td>
                      <td style={tdStyle}><strong>{ticket.titre}</strong></td>
                      <td style={tdStyle}>{ticket.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '0.7rem 1rem',
  color: 'var(--text-light)',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const tdStyle = {
  padding: '0.7rem 1rem',
  fontSize: '0.95rem',
  color: 'var(--text)',
};

export default UserPage;