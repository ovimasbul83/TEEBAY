const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int
    email: String
  }

  type Product {
    id: Int
    name: String
    description: String
    price: Float
    categoryId: Int
<<<<<<< HEAD
=======
    category: Category
>>>>>>> master
  }

  type Category {
    id: Int
    name: String
  }
<<<<<<< HEAD
=======
  type AuthPayload {
    token: String
    user: User
  }
  type Order {
    id: Int!
    userId: Int!
    productId: Int!
    product: Product!
    createdAt: String!
  }
  
  type Rental {
    id: Int!
    userId: Int!
    productId: Int!
    product: Product!
    startDate: String!
    endDate: String!
    createdAt: String!
  }
>>>>>>> master

  type Mutation {
    createUser(email: String!, password: String!): User!
    createProduct(
      name: String!
      description: String!
      price: Float!
      categoryId: Int!
    ): Product!
<<<<<<< HEAD
    createCategory(name: String!): Category!
    deleteProduct(id:Int!):Boolean
=======
    updateProduct(
      id: Int!
      name: String!
      description: String!
      price: Float!
      categoryId: Int!
    ): Product!
    createCategory(name: String!): Category!
    deleteProduct(id:Int!):Boolean
    login(email: String!, password: String!): AuthPayload

    createOrder(productId: Int!): Order!
    createRental(productId: Int!, endDate: String!): Rental!
>>>>>>> master
  }

  type Query {
    users: [User]
    products: [Product]
    categories: [Category]
<<<<<<< HEAD
=======
    orders: [Order]
    rentals: [Rental]
>>>>>>> master
  }
`;

module.exports = typeDefs;