const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
<<<<<<< HEAD
=======
const jwt = require('jsonwebtoken');
>>>>>>> master

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    products: async () => {
<<<<<<< HEAD
      return await prisma.product.findMany();
=======
      return await prisma.product.findMany({

        include: {
          category: true,
        },
      });
>>>>>>> master
    },
    categories: async () => {
      return await prisma.category.findMany();
    },
<<<<<<< HEAD
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      return await prisma.user.create({
=======
    orders: async (_, __, { userId }) => {
      return await prisma.order.findMany({
        where: { userId },
        include: { product: true },
      });
    },

    rentals: async (_, __, { userId }) => {
      return await prisma.rental.findMany({
        where: { userId },
        include: { product: true },
      });
    },
  },

  Mutation: {
    createUser: async (_, { email, password }) => {
      // Check if the email and password are not empty
      // if (!email || !password) {
      //   return { id: null, email: null, error: 'Email and password are required' };
      // }
    
      // Check if the user with the provided email already exists
      // const existingUser = await prisma.user.findUnique({ where: { email } });
      // if (existingUser) {
      //   // Return an error if the user already exists
      //   return { id: null, email: null, error: 'User with this email already exists' };
      // }
    
      // Create a new user if the email doesn't exist
      const newUser = await prisma.user.create({
>>>>>>> master
        data: {
          email,
          password,
        },
      });
<<<<<<< HEAD
    },
    createProduct: async (_, { name, description, price,categoryId }) => {
=======
    
      return { id: newUser.id, email: newUser.email, error: null };
    },
    createProduct: async (_, { name, description, price, categoryId }) => {
>>>>>>> master
      return await prisma.product.create({
        data: {
          name,
          description,
          price,
<<<<<<< HEAD
          categoryId
=======
          categoryId,
        },
      });
    },
    updateProduct: async (_, { id, name, description, price, categoryId }) => {
      return await prisma.product.update({
        where: { id },
        data: {
          name,
          description,
          price,
          categoryId,
>>>>>>> master
        },
      });
    },
    createCategory: async (_, { name }) => {
      return await prisma.category.create({
        data: {
          name,
        },
      });
    },
<<<<<<< HEAD
    deleteProduct: async (_, {id}) => {
      try{
       await prisma.product.delete({
        where:{
          id,
        },

      });
    return true;
  }catch(error){
    console.error("Error deleting product",error);
    return false;

  }
    }

  },
};


=======
    deleteProduct: async (_, { id }) => {
      try {
        await prisma.product.delete({ where: { id } });
        return true;
      } catch (error) {
        console.error("Error deleting product", error);
        return false;
      }
    },
    login: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

      return {
        token,
        user,
      };
    },
    createOrder: async (_, { productId }) => {
      return await prisma.order.create({
        data: {

          productId,
        },
      });
    },

    createRental: async (_, { productId, endDate }) => {
      const startDate = new Date();
      const endDateObj = new Date(endDate);

      return await prisma.rental.create({
        data: {
          productId,
          endDate: endDateObj,
        },
      });
    },
  },
};

>>>>>>> master
module.exports = resolvers;