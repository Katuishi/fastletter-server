const { ApolloServer } = require("apollo-server");
const { Mongoose } = require("mongoose");
const { resolvers } = require("./Graphql/Resolver");
const { typeDefs } = require("./Graphql/TypeDefs");
const mongoose = require("mongoose");

const Main = async () => {
  await mongoose.connect(
    "mongodb+srv://test:salami@cluster0.xpykm.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

Main();
