// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context2';

import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItem,
  removeItemFromCart,
  addItemToCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { id, name, quantity, price, imageUrl } = item;
  // const { addItemToCart, removeItemFromCart, deleteItem } =
  //   useContext(CartContext);

  function handleRemoveItem() {
    dispatch(removeItemFromCart(cartItems, item));
  }

  function handleAddItem() {
    dispatch(addItemToCart(cartItems, item));
  }

  function handleDelete() {
    dispatch(deleteItem(cartItems, item));
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
