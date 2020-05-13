import React from 'react';
import { ProductInfoFragment } from '../generated/types';

type Props = {
  product: ProductInfoFragment;
}

export class Product extends React.Component<Props> {
  render() {
    const { product } = this.props;

    return (
      <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
      </div>
    );
  }
}
