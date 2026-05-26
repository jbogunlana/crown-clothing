import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const categoriesContext = createContext({
  categoriesMaps: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMaps, setCategoriesMaps] = useState({});
  const value = { categoriesMaps, setCategoriesMaps };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMaps(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
