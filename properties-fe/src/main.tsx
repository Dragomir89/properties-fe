import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import UserRegistrationForm from './pages/RegisterPage.tsx';
import AdminPage from './pages/AdminPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/register"
          element={
            <UserRegistrationForm
              onSubmit={() => {
                console.log('submit');
              }}
            />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
