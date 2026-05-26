import ShoppingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "../../styles/CartIcon.js";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toogleIsCartOpen = (e) => {
    // if (isCartOpen === false) return setIsCartOpen(true);
    // if (isCartOpen === true) return setIsCartOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <img src={ShoppingBag} alt="Shopping Bag logo" ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
