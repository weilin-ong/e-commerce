import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './CartIcon.styles.scss';

export default function CartIcon() {
  const { setToogleCart } = useContext(CartContext);

  function handleCartDropdownClick() {
    setToogleCart((prev) => !prev);
  }
  return (
    <div className='cart-icon-container' onClick={handleCartDropdownClick}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}
