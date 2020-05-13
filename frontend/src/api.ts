import ApolloClient, { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:3000',
});

export const productsQuery = gql`
  fragment ProductInfo on Product {
    id
    name
    description
  }

  query Products {
    products {
      ...ProductInfo
    }
  }
`;
