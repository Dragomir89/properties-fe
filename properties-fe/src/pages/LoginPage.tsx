import React from 'react';
import LoginForm from '@components/forms/LoginForm';
import '../components/css/select.css';

const Login = () => {
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div className="login-form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
