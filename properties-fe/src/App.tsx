import { Link as RouterLink } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  login,
  register,
  testClaims,
  forgotPassword,
  resetPassword,
} from './http';
import { TestLink } from './components/TestLink';
import { Button } from '@mui/material';

function App() {
  const METODS = {
    GET: 'GET',
    POST: 'POST',
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button variant="contained">
        <RouterLink to={'/register'}>
          <span style={{ color: 'white' }}>Register Page</span>
        </RouterLink>
      </Button>

      <Button variant="contained">
        <RouterLink to={'/admin'}>
          <span style={{ color: 'white' }}>Admin Page</span>
        </RouterLink>
      </Button>
      <div className="card">
        <TestLink
          method={METODS.POST}
          clickFn={register}
          btnMsg={'Register User'}
          url="/api/Account/register"
        />
        <TestLink
          method={METODS.POST}
          clickFn={login}
          btnMsg="Login User"
          url="/api/Account/login"
        />
        <TestLink
          method={METODS.GET}
          clickFn={testClaims}
          btnMsg="test climesd url"
          url="/api/Account/get-token-claims"
        />
        <TestLink
          method={METODS.POST}
          clickFn={forgotPassword}
          btnMsg="Forgot Password"
          url="/api/Account/forgot-password"
        />

        <TestLink
          method={METODS.POST}
          clickFn={resetPassword}
          btnMsg="Reset Password"
          url="/api/Account/reset-password"
        />
      </div>
    </>
  );
}

export default App;
