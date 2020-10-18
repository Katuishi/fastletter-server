const { ApolloServer } = require("apollo-server");
const { Mongoose } = require("mongoose");
const { resolvers } = require("./Graphql/Resolver");
const { typeDefs } = require("./Graphql/TypeDefs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Main = async () => {
  await mongoose.connect(String(process.env.DBURl), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

Main().catch((error) => {
  console.log(error);
});
