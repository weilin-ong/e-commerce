import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components';

import './Checkout.styles.scss';

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.length > 0 ? (
        <>
          <div className='checkout-header'>
            <div className='header-block'>product</div>
            <div className='header-block'>description</div>
            <div className='header-block'>quality</div>
            <div className='header-block'>price</div>
            <div className='header-block'>remove</div>
          </div>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
          <div className='total'>total: ${totalPrice}</div>
        </>
      ) : (
        <div className='total'>no item in cart.</div>
      )}
    </div>
  );
}
