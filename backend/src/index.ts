import lodash from "lodash";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import { Resolvers } from "./generated/types";

// The GraphQL schema
const commonTypeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const commonResolvers: Resolvers = {
  Query: {
    hello: () => "world!",
  },
};

const schema = makeExecutableSchema({
  typeDefs: [commonTypeDefs],
  resolvers: lodash.merge(commonResolvers),
});

const server = new ApolloServer({
  schema,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
