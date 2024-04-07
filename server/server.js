const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

const prisma = new PrismaClient();
const cors = require('cors');
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

dotenv.config();
app.use(express.json());

app.use(cors());

async function startApolloServer() {
  await server.start();


  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4003;
  app.listen(PORT, () => {
    console.log(
      `Server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer().catch((error) => {
  console.error("Error starting Apollo Server:", error);
});