import "../../scss/CartIcon.scss";
import ShoppingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getMultiFactorResolver } from "firebase/auth";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toogleIsCartOpen = (e) => {
    // if (isCartOpen === false) return setIsCartOpen(true);
    // if (isCartOpen === true) return setIsCartOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <img
        src={ShoppingBag}
        alt="Shopping Bag logo"
        className="shopping-icon"
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
