import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Value,
  RemoveButton,
} from './CheckoutItem.styles';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`product-${name}-${id}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&lt;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&gt;</Arrow>
      </Quantity>
      <BaseSpan>${price * quantity}</BaseSpan>
      <RemoveButton onClick={handleDelete}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
