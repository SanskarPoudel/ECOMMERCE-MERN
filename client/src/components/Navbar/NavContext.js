import { createContext, useEffect, useState } from "react";

export const NavContext = createContext();

const categories = ["Category 1", "Category 2"];

export const ProviderValues = [categories];

const NavContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = () => {
    return fetch("http://localhost:8000/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  return (
    <NavContext.Provider value={{ categories }}>{children}</NavContext.Provider>
  );
};

export default NavContextProvider;
