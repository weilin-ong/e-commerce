// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context2';
import { CheckoutItem } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../store/cart/cart.selector';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  //const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      {cartItems.length > 0 ? (
        <>
          <CheckoutHeader>
            <HeaderBlock>product</HeaderBlock>
            <HeaderBlock>description</HeaderBlock>
            <HeaderBlock>quality</HeaderBlock>
            <HeaderBlock>price</HeaderBlock>
            <HeaderBlock>remove</HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
          <Total>total: ${totalPrice}</Total>
        </>
      ) : (
        <Total>no item in cart.</Total>
      )}
    </CheckoutContainer>
  );
}
