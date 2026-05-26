import { CategoryContainer, Title } from "../../styles/Category";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { categoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

function Category() {
  const { category } = useParams();
  const { categoriesMaps } = useContext(categoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMaps[category] || []);
  }, [category, categoriesMaps]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
