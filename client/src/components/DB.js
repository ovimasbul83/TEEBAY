import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import { ADD_PRODUCT,GET_PRODUCTS,UPDATE_PRODUCT,DELETE_PRODUCT } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import './DB.css'; // Import CSS file for styling

const DB = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = new useNavigate();
  const { loading, error, data,refetch } = useQuery(GET_PRODUCTS);
  const [addProduct] = useMutation(ADD_PRODUCT,{ refetchQueries: [{ query: GET_PRODUCTS }] });
  const [updateProduct] = useMutation(UPDATE_PRODUCT, { refetchQueries: [{ query: GET_PRODUCTS }] });
  const [deleteProduct] = useMutation(DELETE_PRODUCT, { refetchQueries: [{ query: GET_PRODUCTS }] });

  const onSubmit = async (formData) => {
    if (editingProduct) {
      await updateProduct({ variables: { ...formData, id: editingProduct.id } });
      setEditingProduct(null);
    } else {
      await addProduct({ variables: formData });
      <p>Added Successfully</p>
    }
    reset();
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setValue('name', product.name);
    setValue('description', product.description);
    setValue('price', product.price);
    setValue('categoryId', product.categoryId);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct({ variables: { id } });
    <p>Deleted Successfully</p>
  };
  const handleGoToHomePage = () => {
    navigate('/select'); // Navigate to the home page
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-container">
      <div className="home-button" onClick={handleGoToHomePage}>Home</div> 
      <h2>Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>CategoryId</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.categoryId}</td>
              <td>{product.category ? product.category.name : 'N/A'}</td>


              <td>
                <button className="edit-button" onClick={() => handleEditProduct(product)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="form-heading">{editingProduct ? 'Update Product' : 'Add Product'}</h3>
      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Description"
          {...register('description', { required: true })}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Price"
          {...register('price', { valueAsNumber: true })}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Category ID"
          {...register('categoryId', { valueAsNumber: true})}
        />
        <button className="submit-button" type="submit">{editingProduct? 'Update':'ADD'}</button>
      </form>
    </div>
  );
};

export default DB;
