// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context2';
import { Button, BUTTON_TYPE_CLASSES } from '../';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';

import { ProductCardContainer, Footer } from './ProductCard.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  //const { addItemToCart } = useContext(CartContext);

  function handleAddToCartClick() {
    return dispatch(addItemToCart(cartItems, product));
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
