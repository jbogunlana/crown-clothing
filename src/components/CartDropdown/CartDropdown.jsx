import "../../styles/CartDropdown.js";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItems from "../CartItems/CartItems";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItem,
} from "../../styles/CartDropdown.js";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItem>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItem>
      <Button onClick={handleNavigation}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
