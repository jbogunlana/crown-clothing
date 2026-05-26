import { CartItemContainer, ItemDetails } from "../../styles/CartItems";

function CartItems({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItems;
