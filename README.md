# TEEBAY
TEEBAY is a Node.js server application with a GraphQL API for managing users, products, and categories. It uses Express.js for the server, Apollo Server for GraphQL, Prisma for database access, and PostgreSQL as the database.

## Features

- **User Management**: Register, authenticate, and manage users.
- **Product Management**: Operations for products, with category associations.
- **Category Management**: Operations for product categories.
- **GraphQL API**: Exposes a GraphQL API for interacting with the server.

## Installation
### For Backend: 
1. Clone the repository.
2. Navigate to the server `cd TEEBAY/server` and run `npm install`.
3. Create a database with PostgreSQL.
4. Set up environment variables like PORT and database url in a `.env` file 
5. Initialize the database with `npx prisma migrate dev`.
6. Start the server with `npm run dev`.
### For Frontend:
1. Clone the repository.
2. Navigate to the server `cd TEEBAY/client` and run `npm install`.
3. Start the server with `npm start`.


## Usage

Access the GraphQL API at `http://localhost:${PORT}/graphql` to interact with users, products, and categories.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT [License](LICENSE.md) .
