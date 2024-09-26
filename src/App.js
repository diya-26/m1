import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
