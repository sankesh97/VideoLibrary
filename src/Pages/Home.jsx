import { useContext } from 'react';
import { CategoriesContext } from '../Context/CategoriesContext';
import CategoryCard from '../Components/CategoryCard';

const Home = () => {
  const { CategoriesList } = useContext(CategoriesContext);
  return (
    <>
      <h1>Categories</h1>
      <div className='row g-5 my-1'>
        {CategoriesList.map((category) => (
          <CategoryCard key={category._id} item={category} />
        ))}
      </div>
    </>
  );
};
export default Home;
