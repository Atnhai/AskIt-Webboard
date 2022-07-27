const { ApolloServer } = require('apollo-server');
const connectToDB = require('./db');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { PORT } = require('./utils/config');
require('dotenv').config();
connectToDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// server.listen(process.env.PORT || 3000 , () => {
  // console.log("You are connected!");
// });
