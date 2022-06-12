import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CartItem } from '../';
import { CartContext } from '../../contexts/cart.context';

import './CartDropdown.styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate('/checkout');
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <Button cta='go to checkout' onClick={navigateToCheckout} />
    </div>
  );
}
