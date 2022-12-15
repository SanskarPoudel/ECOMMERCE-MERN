import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchAllCategories = () => {
    return axios
      .get("http://localhost:8000/api/v1/products")
      .then((response) => setProducts(response.data));
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
