import { Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './Pages/Home';
import Category from './Pages/Category';
import WatchLater from './Pages/WatchLater';
import Explore from './Pages/Explore';
import SingleVideo from './Pages/SingleVideo';
// import PlayLists from './Pages/PlayLists';

function App() {
  return (
    <div className='container-fluid vh-100'>
      <div className='row'>
        <div className='col-md-2 bg-dark vh-100 py-5 sticky-md-top'>
          <NavMenu></NavMenu>
        </div>
        <div className='col-md-10 py-5 px-5'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='/category/:categoryName'
              element={<Category />}
            ></Route>
            <Route
              path='/category/:categoryName/:videoId'
              element={<SingleVideo />}
            ></Route>
            <Route path='/watch-later' element={<WatchLater />}></Route>
            <Route path='/explore' element={<Explore />}></Route>
            {/* <Route path='/playlists' element={<PlayLists />}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
