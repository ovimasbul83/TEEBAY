import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations.js'; // Import your login mutation
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
const Login = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    //console.log(formData);
    try {
      const { data } = await login({ variables: formData });
      // Handle successful login, save token to local storage, update state, etc.
      console.log(data.login.token);
      navigate('/select');

    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='center-content'>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Login;
