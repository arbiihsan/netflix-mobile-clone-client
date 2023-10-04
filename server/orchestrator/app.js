require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { movieTypeDefs, movieResolvers } = require("./schemas/movies");
const { userTypeDefs, userResolvers } = require("./schemas/users");
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: [movieTypeDefs, userTypeDefs],
  resolvers: [movieResolvers, userResolvers],
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: PORT },
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((err) => console.log(err));
