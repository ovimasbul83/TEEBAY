# Part 4: Documentation

In this section, I'll provide an overview of how each part of the problem was solved, along with some details on the implementation approach for the assigned task TEEBAY.

## 1. Database Management

### Problem:
The task required setting up a relational database management system (RDBMS) using PostgreSQL and interacting with it using an ORM tool named Prisma.

### Solution:
- **PostgreSQL**: Installed and configured PostgreSQL as the RDBMS to store data.
- **Prisma**: Used Prisma as the ORM to interact with the PostgreSQL database. Defined the database schema using Prisma schema language, specifying models, relationships, and constraints.
- **Type Definitions and Resolvers**: Created type definitions (typedefs) and resolvers to handle GraphQL queries, mutations, and authentication. These resolvers interact with the Prisma client to perform CRUD operations on the database.

## 2. GraphQL Integration

### Problem:
The task involved integrating GraphQL with the backend to enable querying, mutating, and subscribing to data.

### Solution:
- **Apollo Server**: Integrated Apollo Server with the backend to support GraphQL. Apollo Server handles incoming GraphQL requests, executes resolvers, and serves the GraphQL API.
- **Cross domain Issue**: For Enabling controlled resources sharing across two different domain CORS is used.
  

## 3. Frontend Development

### Problem:
The task required developing a frontend interface to interact with the GraphQL API.

### Solution:
- **React**: Built the frontend using React, a popular JavaScript library for building user interfaces.
- **React Hook Form**: Utilized React Hook Form for managing form state and validation, simplifying the form development process.
- **Apollo Client**: Used Apollo Client in the frontend to communicate with the GraphQL server. Apollo Client manages GraphQL operations, caching, and state management in the frontend application.
- **Styling**: Styled frontend components using CSS to create an aesthetically pleasing and user-friendly interface.

