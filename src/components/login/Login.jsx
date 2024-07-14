import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', {
        email,
        password
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        onLoginSuccess();
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleSignUp = () => {
    navigate('/register'); // Register sahifasiga o'tish
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
      </div>
    </div>
  );
};

export default Login;
