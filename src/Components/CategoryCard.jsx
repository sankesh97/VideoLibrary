import { NavLink } from 'react-router-dom';

const CategoryCard = ({ item }) => (
  <div key={item._id} className='col-3'>
    <NavLink to={`/category/${item.category}`} className='text-decoration-none'>
      <div className='card' style={{ maxWidth: '300px' }}>
        <img
          src={item.thumbnail}
          className='card-img-top'
          alt={item.category}
        />
        <div className='card-body'>
          <h6>{item.category}</h6>
        </div>
      </div>
    </NavLink>
  </div>
);
export default CategoryCard;
