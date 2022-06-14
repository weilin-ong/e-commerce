import { CartItemContainer, ItemDetails } from './CartItem.styles.jsx';

export default function CartItem({ item }) {
  const { name, imageUrl, quantity, price, id } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`product-${name}-${id}`} />
      <ItemDetails>
        <span> {name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
