import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client';
//import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import DB from './components/DB';
//import LoginForm from './components/LoginForm';
import BR from './components/BR';
import Landing from './components/Landing';
import Home from './components/Home';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache()// replace with your GraphQL server endpoint
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/select' element={<Home/>}/>
        <Route path='/manage-products' element={<DB/>}/>
        <Route path='/shop' element={<BR/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
