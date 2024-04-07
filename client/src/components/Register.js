import React from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '../graphql/mutations.js';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm.js';

const Register= ()=>{
    const [registerUser, { loading, error }] = useMutation(REGISTER_MUTATION);
    const navigate = useNavigate();
    
    const handleRegister= async (formData)=>{
        try {
            const { data: { createUser } } = await registerUser({ variables: formData });
            if (createUser.error){
                console.error('Register error: ',createUser.error);
            }
            else{
                console.log('Registration Successful');
                navigate('/login');

            }
            
        } catch (error) {
            console.error('Registration error:', error);

        }
    };
    return (
        <div>
        <h2>Register</h2>
        <RegisterForm onSubmit={handleRegister} />
        {loading && <p>Loading...</p> && <p>Registration Successful</p>}
        {error && <p>Error: User already exists! Try a new email</p>}
      </div>
    )

};
export default Register;