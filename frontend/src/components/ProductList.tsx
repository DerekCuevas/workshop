import React from 'react';
import { Product } from './Product';
import { ProductInfoFragment } from '../generated/types';

type Props = {
  products: ProductInfoFragment[]
}

export class ProductList extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.products.map(p => (<Product key={p.id} product={p} />))}
      </div>
    );
  }
}
