import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'; // ✅ Port corrigé

// --- UTILISATEURS ---
export const createUser = async (data) => {
  return axios.post(`${API_BASE_URL}/utilisateurs`, data);
};

export const getUser = async (id) => {
  return axios.get(`${API_BASE_URL}/utilisateurs/${id}`);
};

export const getAllUsers = async () => {
  return axios.get(`${API_BASE_URL}/utilisateurs`);
};

// --- TICKETS ---
export const createTicket = async (data) => {
  return axios.post(`${API_BASE_URL}/tickets`, data);
};

export const getTicket = async (id) => {
  return axios.get(`${API_BASE_URL}/tickets/${id}`);
};

export const getAllTickets = async () => {
  return axios.get(`${API_BASE_URL}/tickets`);
};

export const getUserTickets = async (utilisateurId) => {
  return axios.get(`${API_BASE_URL}/tickets/utilisateur/${utilisateurId}`);
};

export const updateTicket = async (id, data) => {
  return axios.put(`${API_BASE_URL}/tickets/${id}`, data);
};

export const deleteTicket = async (id) => {
  return axios.delete(`${API_BASE_URL}/tickets/${id}`);
};

// Alias pour compatibilité
export const createUtilisateur = createUser;