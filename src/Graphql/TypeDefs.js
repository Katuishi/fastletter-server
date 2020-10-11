const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    test: String
    Scores(level:String): [Score!]!
  }

  type Mutation {
    addScore(user: InputScore!): Boolean
  }

  input InputScore {
    username: String!
    points: Int!
    level:String!
  }

  type Score {
    username: String!
    points: Int!
    level:String!
  }
`;

module.exports = { typeDefs };
