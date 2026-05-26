import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "../../styles/ProductCard";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = (e) => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
