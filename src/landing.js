import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group'; // For Groups
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; // For Friends
import ListAltIcon from '@mui/icons-material/ListAlt'; // For Activity
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // For Profile
import AddIcon from '@mui/icons-material/Add'; // For Adding Expenses
import './landing.css';

const LandingPage = () => {
  const [open, setOpen] = useState(true); // State for Snackbar visibility

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Automatically close the Snackbar after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="landing-page">
      
      {/* Top Navbar for Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={10000} // Auto hide after 10 seconds
        onClose={handleClose}
        message="Hi, welcome to TrackSplit"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioning
      />

      {/* Main Content (Centered Add Friends Message) */}
      <div className="welcome-section">
        <Typography variant="h4" gutterBottom>
          You have not added any friends yet!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Start by inviting friends to share your expenses and balances.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/add-friend">
          Add Friends
        </Button>
      </div>

      {/* Bottom Navbar with Icons */}
      <AppBar position="fixed" className="bottom-navbar" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar className="nav-links">
          <Button color="inherit" component={Link} to="/friends" className="nav-button">
            <EmojiPeopleIcon />
          </Button>
          <Button color="inherit" component={Link} to="/groups" className="nav-button">
            <GroupIcon />
          </Button>
          <Button color="inherit" component={Link} to="/add-expense" className="nav-button">
            <AddIcon /> {/* "+" Icon for Adding Expenses */}
          </Button>
          <Button color="inherit" component={Link} to="/activity" className="nav-button">
            <ListAltIcon />
          </Button>
          <Button color="inherit" component={Link} to="/profile" className="nav-button">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LandingPage;
