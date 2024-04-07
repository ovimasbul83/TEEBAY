import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_PRODUCTS, CREATE_ORDER, CREATE_RENTAL, GET_ORDERS, GET_RENTALS } from '../graphql/mutations';

const BR = () => {
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
    console.log(productId)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Buy Product</h3>
      <ul>
        {data?.products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleBuyProduct(product.id)}>Buy</button>
          </li>
        ))}
      </ul>

      <h3>Rent Product</h3>
      <ul>
        {data?.products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleRentProduct(product.id)}>Rent</button>
          </li>
        ))}
      </ul>

      <h3>Your Orders</h3>
      <ul>
        {ordersData?.orders.map(order => (
          <li key={order.id}>
            {order.product.name} - ${order.product.price}
            <br />
            Purchased on: {order.createdAt}
          </li>
        ))}
      </ul>

      <h3>Your Rentals</h3>
      <ul>
        {rentalsData?.rentals.map(rental => (
          <li key={rental.id}>
            {rental.product.name} - ${rental.product.price}
            <br />
            Rented from: {rental.startDate} to {rental.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BR;
