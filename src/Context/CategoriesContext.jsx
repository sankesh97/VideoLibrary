import { createContext, useState } from 'react';
import categories from '../Data/CategoriesData';

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [CategoriesList, setCategoriesList] = useState(categories);

  return (
    <CategoriesContext.Provider value={{ CategoriesList, setCategoriesList }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
