import React from 'react';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './landing.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            ABCname
          </Typography>
          <div className="nav-links">
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
            <Button color="inherit" component={Link} to="/logout">
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      
      <Container className="welcome-section">
        <Typography variant="h3" gutterBottom>
          Welcome !
        </Typography>
        <Typography variant="body1" gutterBottom>
          Manage your expenses and keep track of who owes you. Start sharing your expenses with friends and family!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/dashboard">
          Go to Dashboard
        </Button>
      </Container>

    
      <Container className="features-section">
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1">
          <ul>
            <li>Track shared expenses easily.</li>
            <li>Keep balances in sync with friends and family.</li>
            <li>Split bills equally or by custom amounts.</li>
            <li>Detailed expense reports and history.</li>
          </ul>
        </Typography>
      </Container>
    </div>
  );
};

export default LandingPage;
