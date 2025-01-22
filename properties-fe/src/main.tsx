import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UserRegistrationForm from './pages/RegisterPage';
import AdminPage from 'src/pages/AdminPage';
import AddPropertyPage from 'src/pages/AddPropertyPage';
import LoginPage from 'src/pages/LoginPage';
import ForgotPasswordPage from 'src/pages/ForgotPasswordPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserRegistrationForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add-property" element={<AddPropertyPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      </Routes>
    </Router>
  </StrictMode>
);
