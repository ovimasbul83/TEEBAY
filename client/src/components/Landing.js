import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'; // Import CSS file for styling

const Landing = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <div className="center-content"> {/* Container for centering content */}
        <h1>Welcome to Teebay</h1>
        <div className="landing-button" onClick={handleRegisterClick}>Register</div>
        <div className="landing-button" onClick={handleLoginClick}>Login</div>
      </div>
    </div>
  );
};

export default Landing;