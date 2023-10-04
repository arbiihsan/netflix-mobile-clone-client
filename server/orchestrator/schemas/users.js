"use strict";

const axios = require("axios");
const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:4001";
const redis = require("../config/redisConnection");

const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID): User
  }

  type Msg {
    msg: String
  }

  type Mutation {
    addUser(username: String,
    email: String,
    password: String,
    role: String,
    phoneNumber: String,
    address: String): Msg,

    deleteUser(id:ID): Msg
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      const userCache = await redis.get("users");

      if (userCache) {
        const data = JSON.parse(userCache);
        return data;
      } else {
        const { data } = await axios.get(`${USER_SERVICE_URL}/users`);
        await redis.set("users", JSON.stringify(data));
        return data;
      }
    },
    getUserById: async (_, args) => {
      const { id } = args;

      const { data } = await axios.get(`${USER_SERVICE_URL}/users/${id}`);

      return data;
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const { username, email, password, role, phoneNumber, address } = args;
      const data = await axios.post(`${USER_SERVICE_URL}/users`, {
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      await redis.del("users");
      return { msg: "Successfully add user" };
    },

    deleteUser: async (_, args) => {
      const { id } = args;
      await axios.delete(`${USER_SERVICE_URL}/users/${id}`);
      await redis.del("users");

      return { msg: "Data has been deleted" };
    },
  },
};

module.exports = {
  userTypeDefs: typeDefs,
  userResolvers: resolvers,
};
