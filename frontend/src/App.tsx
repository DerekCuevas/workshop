import React from 'react';
import './App.css';
import { client, productsQuery } from './api';

class App extends React.Component {
  componentDidMount() {
    client
      .query({ query: productsQuery })
      .then(result => console.log(result));
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
