import './CartItem.styles.scss';

export default function CartItem({ item }) {
  const { name, imageUrl, quantity, price, id } = item;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`product-${name}-${id}`} />
      <div className='item-details'>
        <span className='name'> {name}</span>
        <span className='price'> {quantity} x ${price}</span>
      </div>
    </div>
  );
}
