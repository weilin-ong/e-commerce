import { useContext } from 'react';
import { Button, BUTTON_TYPE_CLASSES } from '../';
import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer, Footer } from './ProductCard.styles';

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  function handleAddToCartClick() {
    return addItemToCart(product);
  }

  const { id, name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`product-${name}-${id}`} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        cta='Add to cart'
        onClick={handleAddToCartClick}
      />
    </ProductCardContainer>
  );
}
