import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { TextField, Button, Container, Typography } from '@mui/material';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Login:', { email, password });
    
  
    navigate('/landing');
  };

  return (
    <Container maxWidth="sm" className="container">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      <Typography variant="body2" className="link">
        Don't have an account? <Link to="/signup">Signup</Link>
      </Typography>
    </Container>
  );
};

export default Login;
