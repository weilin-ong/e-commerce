// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context2';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalItem,
  selectToggleCart,
} from '../../store/cart/cart.selector';
import { setToggleCart } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

export default function CartIcon() {
  const dispatch = useDispatch();
  const toggleCart = useSelector(selectToggleCart);
  const totalItems = useSelector(selectTotalItem);
  //const { setToggleCart, toggleCart, totalItems } = useContext(CartContext);

  function handleCartDropdownClick() {
    dispatch(setToggleCart(!toggleCart));
  }
  return (
    <CartIconContainer onClick={handleCartDropdownClick}>
      <ShoppingIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
}
