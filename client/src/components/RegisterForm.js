import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm= ({onSubmit})=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit =(data)=>{
        onSubmit(data);
    };
     
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="email"  placeholder='Email'{...register('email', { required: 'Username is required' })} />
        {errors.email && <span>Email is required</span>}
        <input type="password" placeholder='Password'{...register('password', { required: 'Password is required' })}/> 
        {errors.password && <span>Password is required</span>}
        <button type="submit">Register</button>
        </form>
    )
    

};
export default RegisterForm;