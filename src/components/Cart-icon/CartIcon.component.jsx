import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

export default function CartIcon() {
  const { setToogleCart, totalItems } = useContext(CartContext);

  function handleCartDropdownClick() {
    setToogleCart((prev) => !prev);
  }
  return (
    <CartIconContainer onClick={handleCartDropdownClick}>
      <ShoppingIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
}
