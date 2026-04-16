import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import TicketPage from './pages/TicketPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;