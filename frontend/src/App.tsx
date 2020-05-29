import React from "react";
import "./App.css";
import { CounterHook, CounterClass } from "./components/Counter";
import { client, productsQuery } from "./api";
import { ProductList } from "./components/ProductList";
import { ProductInfoFragment } from "./generated/types";

type Props = {};

type State = {
  products: ProductInfoFragment[];
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    client
      .query({ query: productsQuery })
      .then((result) => this.setState({ products: result.data.products }));
  }

  render() {
    return (
      <>
        <CounterClass init={1} max={5} />
        <CounterHook init={1} max={5} />
        <ProductList products={this.state.products} />;
      </>
    );
  }
}

export default App;
