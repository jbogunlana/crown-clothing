import "../../scss/CartDropdown.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItems from "../CartItems/CartItems";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleNavigation}>Go To Checkout</Button>
    </div>
  );
}

export default CartDropdown;
