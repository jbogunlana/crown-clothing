import "../../scss/CheckoutItems.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleDelete}>
        &#120;
      </div>
    </div>
  );
}

export default CheckoutItems;
