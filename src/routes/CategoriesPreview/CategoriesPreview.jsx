import { useContext } from "react";
import { categoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

function CategoriesPreview() {
  const { categoriesMaps } = useContext(categoriesContext);

  return (
    <>
      {Object.keys(categoriesMaps).map((title) => {
        const products = categoriesMaps[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
