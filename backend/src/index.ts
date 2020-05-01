import lodash from "lodash";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import { Resolvers } from "./generated/types";
import * as DAL from "./data-access";

// The GraphQL schema
const commonTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
  }

  type Query {
    "A simple type for getting started!"
    hello: String!
    products: [Product!]!
  }
`;

// A map of functions which return data for the schema.
const commonResolvers: Resolvers = {
  Product: {
    id: (root) => root.id,
    name: (root) => root.name,
  },

  Query: {
    hello: () => "world!",
    products: () => DAL.getProducts(),
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
