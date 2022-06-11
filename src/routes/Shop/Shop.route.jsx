import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { ProductCard } from '../../components';

import './Shop.styles.scss';

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
