import ApolloClient, { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:3000',
});

export const productsQuery = gql`
  query Products {
    products {
      id
      name
    }
  }
`;
