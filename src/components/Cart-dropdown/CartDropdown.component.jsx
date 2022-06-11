import { useContext } from 'react';
import { Button, CartItem } from '../';
import { CartContext } from '../../contexts/cart.context';

import './CartDropdown.styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <Button cta='go to checkout' />
    </div>
  );
}
