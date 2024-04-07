// LoginForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css'

const LoginForm=({onSubmit})=>{
    const {register,handleSubmit,formState:{errors}}=useForm();

    const handleFormSubmit = (data) => {
      //console.log(data);
      onSubmit(data);
    };
  
    return (
      <div className='form-container'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input className="input-field" type="email"  placeholder='Email'{...register('email', { required: 'Username is required' })} />
        {errors.email && <span>Email is required</span>}
        <input className="input-field" type="password" placeholder='Password'{...register('password', { required: 'Password is required' })}/> 
        {errors.password && <span>Password is required</span>}
        <button className="submit-button" type="submit">Login</button>
      </form>
      </div>
    );
  };
export default LoginForm;