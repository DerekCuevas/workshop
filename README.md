# Workshop

## Day 2 - Getting Started with React & Apollo Client

- GraphQL Review
- React Overview (https://reactjs.org/)
  - Component based (https://reactjs.org/docs/react-component.html)
- Setup React App (https://create-react-app.dev/)
- Setup Apollo Client (https://www.apollographql.com/docs/react/)
- Create components to display a list of products
- Homework
  - Display product categories
  - Display product reviews

## Day 1 - Backend with GraphQL

- Discuss Project Goal (Building a simple e-commerce website)
  - Why e-commerce is a good example?
- Setup Apollo Server
  - Hello World Server
- GraphQL Overview (see below)
- Defining Types and Queries
  - Review Scalar Types
  - Create Product Type
  - Create Simple Product Query
  - Create Product Query with Arguments
- Homework Assignment
  - Expand Products to have Categories
    - Products can belong to many Categories
  - Expand Products to have Review
    - Products can have many reviews

## GraphQL Overview/Talking points

- Quick Review: What is REST?

  - https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

- What is GraphQL?

  - https://graphql.org
  - https://www.graphql.com/guides/
  - Just a spec, no single implementation (reference impl https://github.com/graphql/graphql-js)

- What GraphQL isn't

  - A datastore
  - A programming language
  - SQL
  - Coupled to HTTP

- Developer Experiance

  - No need for `curl`
  - No need for https://swagger.io
  - Playground (https://developer.github.com/v4/explorer, https://github.com/prisma-labs/graphql-playground)
  - Code generators https://graphql-code-generator.com/
  - Editor plugins https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo

- Implementing a GraphQL server

  - https://graphql.org/learn/execution/

- Experimental

  - https://hasura.io/

### GraphQL vs REST

GraphQL is RESTful in many ways (client-server, stateless)

Pros:

- Increased client flexibility and control
- Simplified backend API. No need for many custom API routes that serve similar data.
- Standard for documentation
- Developer tools

Cons:

- Less optimal performance.
- Caching. No obvious key. Doesn't fit well with HTTP caching semantics
- Compatibility with HTTP. Typical to not use stadard HTTP semantics (methods, error handling)

## Usefull tools

- https://google.github.io/intermock/
