import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './CheckoutItem.styles.scss';

export default function CheckoutItem({ item }) {
  const { id, name, quantity, price, imageUrl } = item;

  const { addItemToCart, removeItemFromCart, deleteItem } =
    useContext(CartContext);

  function handleRemoveItem() {
    return removeItemFromCart(item);
  }

  function handleAddItem() {
    return addItemToCart(item);
  }

  function handleDelete() {
    return deleteItem(item);
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`product-${name}-${id}`} />
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={handleRemoveItem}>
          &lt;
        </div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={handleAddItem}>
          &gt;
        </div>
      </span>

      <span className='price'>${price * quantity}</span>
      <div className='remove-button' onClick={handleDelete}>
        &#10005;
      </div>
    </div>
  );
}
