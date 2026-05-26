import {
  CheckoutItemContainer,
  ImageContainer,
  Basespan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "../../styles/CheckoutItems";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function CheckoutItems({ cartItem }) {
  const { removeCartItemTotally, addItemToCart, removeCartItem } =
    useContext(CartContext);
  const { imageUrl, name, quantity, price } = cartItem;

  const handleDelete = (e) => {
    removeCartItemTotally(cartItem.id);
  };

  const addItemHandler = (e) => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = (e) => {
    removeCartItem(cartItem.id);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Basespan>{name}</Basespan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Basespan>{price}</Basespan>
      <RemoveButton onClick={handleDelete}>&#120;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItems;
