import React from 'react';
import LoginForm from '@components/forms/LoginForm';
import '../components/css/select.css';
import ForgotPassword from '@components/ForgotPassword';

const Login = () => {
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div className="login-form-wrapper">
        <LoginForm />
        <ForgotPassword />
      </div>
    </div>
  );
};

export default Login;
