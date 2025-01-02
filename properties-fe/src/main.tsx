import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UserRegistrationForm from './pages/RegisterPage';
import AdminPage from 'src/pages/AdminPage';
import AddPropertyPage from 'src/pages/AddPropertyPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<UserRegistrationForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add-property" element={<AddPropertyPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
