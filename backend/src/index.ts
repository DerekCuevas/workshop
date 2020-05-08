import lodash from "lodash";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import { Resolvers } from "./generated/types";
import * as DAL from "./data-access";

const commonTypeDefs = gql`
  enum Category {
    LEISURE
    GAMING
    FOOD
    EXERCISE
    OUTDOORS
  }

  type Review {
    id: ID!
    name: String!
    rating: Int!
    text: String
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    categories: [Category!]!
    reviews: [Review!]
  }

  type Query {
    product(id: ID!): Product
    products: [Product!]!
  }
`;

const commonResolvers: Resolvers = {
  Product: {
    reviews: (root) => DAL.getReviewsForProduct(root.id),
  },
  Query: {
    product: (_root, args) => DAL.getProductById(args.id),
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
