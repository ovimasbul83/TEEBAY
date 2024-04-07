import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../graphql/mutations';
const Dashboard= ()=>{
    const [addProduct] = useMutation(ADD_PRODUCT);
    const { register, handleSubmit  } = useForm();
    const onSubmit = async (formData) => {
        try {
            const { data: { createProduct } } = await addProduct({ variables: formData });
            if (createProduct.error){
                console.error('Register error: ',createProduct.error);
            }
            else{
                console.log('Registration Successful');

            }
            
        } catch (error) {
            console.error('Registration error:', error);

        }


    };
    
     
    return (
            <div>
              <h2>Products</h2>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  {...register('description', )}
                />
                <input
                  type="number"
                  placeholder="Price"
                  {...register('price', {valueAsNumber: true})}
                />
                <input
                  type="number"
                  placeholder="Category ID"
                  {...register('categoryId', { valueAsNumber: true })}
                />
                <button type="submit">Add</button>
              </form>
            </div>
          );
    

};
export default Dashboard;