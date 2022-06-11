import { useContext } from 'react';
import { Button } from '../';
import { CartContext } from '../../contexts/cart.context';

import './ProductCard.styles.scss';

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  function handleAddToCartClick() {
    return addItemToCart(product);
  }

  const { id, name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`product-${name}-${id}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' cta='Add to cart' onClick={handleAddToCartClick} />
    </div>
  );
}
