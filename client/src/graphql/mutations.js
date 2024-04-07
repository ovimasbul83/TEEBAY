import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;
export const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
      email
    }
  }
`;
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation CreateProduct($name: String!, $description: String!, $price: Float!, $categoryId: Int!) {
    createProduct(name: $name, description: $description, price: $price, categoryId: $categoryId) {
      name
      description
      price
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: Int!
    $name: String!
    $description: String!
    $price: Float!
    $categoryId: Int!
  ) {
    updateProduct(
      id: $id
      name: $name
      description: $description
      price: $price
      categoryId: $categoryId
    ) {
      id
      name
      description
      price
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;
export const CREATE_ORDER = gql`
  mutation CreateOrder($productId: Int!) {
    createOrder(productId: $productId) {
      id
      productId
      product {
        id
        name
        price
      }
      createdAt
    }
  }
`;

export const CREATE_RENTAL = gql`
  mutation CreateRental($productId: Int!, $endDate: String!) {
    createRental(productId: $productId, endDate: $endDate) {
      id
      productId
      product {
        id
        name
        price
      }
      startDate
      endDate
      createdAt
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      productId
      product {
        id
        name
        price
      }
      createdAt
    }
  }
`;

export const GET_RENTALS = gql`
  query GetRentals {
    rentals {
      id
      productId
      product {
        id
        name
        price
      }
      startDate
      endDate
      createdAt
    }
  }
`;
