import { useContext } from 'react';
import VideoCard from '../Components/VideoCard';
import { WatchLaterContext } from '../Context/WatchLaterContext';

const WatchLater = () => {
  const { WatchLaterList } = useContext(WatchLaterContext);

  return (
    <>
      <h1>Watch Later</h1>
      <div className='row g-5 my-1'>
        {WatchLaterList.length ? (
          WatchLaterList.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))
        ) : (
          <p>
            There are no videos here. <br />
            Please add videos to watchlist.
          </p>
        )}
      </div>
    </>
  );
};
export default WatchLater;
