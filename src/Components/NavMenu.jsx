import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  const HoverActive = ({ isActive }) =>
    isActive
      ? ' active text-decoration-none nav-link'
      : 'text-decoration-none nav-link';
  return (
    <>
      <nav className='nav nav-pills d-flex flex-column h-100'>
        <li className='nav-item'>
          <NavLink to='/' className={HoverActive}>
            <i className='bi bi-house'></i> Home
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/explore' className={HoverActive}>
            <i className='bi bi-compass'></i> Explore
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/playlists' className={HoverActive}>
            <i className='bi bi-file-earmark-plus'></i> Playlists
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/watch-later' className={HoverActive}>
            <i className='bi bi-clock'></i> Watch Later
          </NavLink>
        </li>
      </nav>
    </>
  );
};
export default NavMenu;
