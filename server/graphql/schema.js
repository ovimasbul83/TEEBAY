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
    category: Category
  }

  type Category {
    id: Int
    name: String
  }
  type AuthPayload {
    token: String
    user: User
  }
  type Order {
    id: Int
    productId: Int!
    product: Product
    createdAt: String
  }
  
  type Rental {
    id: Int
    productId: Int!
    product: Product
    startDate: String
    endDate: String!
    createdAt: String
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createProduct(
      name: String!
      description: String!
      price: Float!
      categoryId: Int!
    ): Product!
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
  }

  type Query {
    users: [User]
    products: [Product]
    categories: [Category]
    orders: [Order]
    rentals: [Rental]
  }
`;

module.exports = typeDefs;