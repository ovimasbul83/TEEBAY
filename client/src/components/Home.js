import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const handleManageProductsClick = () => {
    navigate('/manage-products');
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
    <div className="home-page">
      <div className="center-content"> {/* Container for centering content */}
        <h1>Welcome to Teebay</h1>
          <div className="home-button" onClick={handleManageProductsClick}>Manage Products</div>
          <div className="home-button" onClick={handleShopClick}>Shop</div>
        </div>
      </div>
  );
};

export default Home;
