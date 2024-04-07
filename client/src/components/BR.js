import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_PRODUCTS, CREATE_ORDER, CREATE_RENTAL, GET_ORDERS, GET_RENTALS } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import './BR.css'; // Import CSS file for styling

const BR = () => { 

  const navigate = useNavigate(); // Use useNavigate hook directly
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [{ query: GET_ORDERS }]
  });
  const [createRental] = useMutation(CREATE_RENTAL, {
    refetchQueries: [{ query: GET_RENTALS }]
  });

  const { data: ordersData } = useQuery(GET_ORDERS);
  const { data: rentalsData } = useQuery(GET_RENTALS);

  const handleBuyProduct = async (productId) => {
    try {
      await createOrder({ variables: { productId } });
      alert('Product purchased successfully!');
    } catch (error) {
      alert('Failed to buy the product. Please try again.');
      console.error('Error buying product:', error);
    }
  };

  const handleRentProduct = async (productId) => {
    const endDate = prompt('Enter the end date (YYYY-MM-DD) to rent the product until:');
    if (!endDate) return; // If the user cancels, exit

    try {
      await createRental({ variables: { productId, endDate } });
      alert('Product rented successfully!');
    } catch (error) {
      alert('Failed to rent the product. Please try again.');
      console.error('Error renting product:', error);
    }
  };

  const handleGoToHomePage = () => {
    navigate('/select'); // Navigate to the home page
  };
  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleString();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="br-container">
      <div className="home-button" onClick={handleGoToHomePage}>Home</div>

      <h3>Buy Product</h3>
      <ul className="product-list">
        {data?.products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button className="buy-button" onClick={() => handleBuyProduct(product.id)}>Buy</button>
          </li>
        ))}
      </ul>

      <h3>Rent Product</h3>
      <ul className="product-list">
        {data?.products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button className="rent-button" onClick={() => handleRentProduct(product.id)}>Rent</button>
          </li>
        ))}
      </ul>

      <h3>Your Orders</h3>
      <ul className="order-list">
        {ordersData?.orders.map(order => (
          <li key={order.id}>
            {order.product.name} - ${order.product.price}
            <br />
            Purchased on: {formatDate(order.createdAt)}
          </li>
        ))}
      </ul>

      <h3>Your Rentals</h3>
      <ul className="rental-list">
        {rentalsData?.rentals.map(rental => (
          <li key={rental.id}>
            {rental.product.name} - ${rental.product.price}
            <br />
            Rented from: {formatDate(rental.startDate)} to {formatDate(rental.endDate)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BR;
