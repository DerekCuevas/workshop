# Workshop

## React Hooks

- https://www.youtube.com/watch?v=wXLf18DsV-I

## Day 3 - React Architecture: State Management and Side Effects

### State Management

> React is a state management library

https://kentcdodds.com/blog/application-state-management-with-react

Key concepts

- global vs local state
- single source of truth
- derived state, memoization
- observability

Libraries

- Redux https://github.com/reduxjs/redux
  - Redux Toolkit https://redux-toolkit.js.org
  - Reselect https://github.com/reduxjs/reselect
  - Middleware (important concept since many libs are build ontop of this) https://redux.js.org/advanced/middleware
- Mobx https://github.com/mobxjs/mobx
- Unstated https://github.com/jamiebuilds/unstated
- Apollo https://www.apollographql.com/docs/react/data/local-state/

### Side effects (Redux only)

- Thunk https://github.com/reduxjs/redux-thunk
- Saga https://github.com/redux-saga/redux-saga
- Observable https://github.com/redux-observable/redux-observable
  - RxJS https://github.com/ReactiveX/rxjs
- Loop https://github.com/redux-loop/redux-loop

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

## React.StrictMode

- Tool for highlighting potential issues in a React app, including:
  - Components with unsafe lifecycles
  - Use of legacy string ref API
  - Use of deprecated findDOMNode
- Does NOT affect production build
- Resources:
  - https://reactjs.org/docs/strict-mode.html
  - https://medium.com/nmc-techblog/wait-youre-not-using-react-strictmode-a9713927a33b
