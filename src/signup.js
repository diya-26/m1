import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
   
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup:', { email, password });
  };

  return (
    <Container maxWidth="sm" className="container">
      <Typography variant="h4">Signup</Typography>
      <form onSubmit={handleSignup}>
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
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Signup
        </Button>
      </form>
      <Typography variant="body2" className="link">
        Already have an account? <Link to="/">Login</Link>
      </Typography>
    </Container>
  );
};

export default Signup;
