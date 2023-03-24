// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context2';
import { useNavigate } from 'react-router-dom';
import { Button, CartItem } from '../';
import {  useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CartDropDownContainer,
  EmptyMsg,
  CartItems,
} from './CartDropdown.styles';

export default function CartDropdown() {
  //const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate('/checkout');
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMsg>Cart is empty</EmptyMsg>
        )}
      </CartItems>
      <Button cta='go to checkout' onClick={navigateToCheckout} />
    </CartDropDownContainer>
  );
}
