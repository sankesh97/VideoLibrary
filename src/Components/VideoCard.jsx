import { useContext } from 'react';
import { WatchLaterContext } from '../Context/WatchLaterContext';
import { NavLink } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const { WatchLaterList, addToWatchList, RemoveFromWatchList } =
    useContext(WatchLaterContext);

  const WatchListLogic = (
    <div
      className='bg-white p-1 text-primary position-absolute top-0 end-0 rounded rounded-top-0 rounded-end-0'
      onClick={() => {
        WatchLaterList.find(
          (WatchListVideo) => WatchListVideo._id === video._id
        )
          ? RemoveFromWatchList(video._id)
          : addToWatchList(video);
      }}
    >
      {WatchLaterList.find(
        (WatchListVideo) => WatchListVideo._id === video._id
      ) ? (
        <i className='bi bi-clock-fill'></i>
      ) : (
        <i className='bi bi-clock'></i>
      )}
    </div>
  );
  return (
    <div className='col-4'>
      <div className='card' style={{ maxWidth: '300px' }}>
        <NavLink
          to={`/category/${video.category}/${video._id}`}
          className='text-decoration-none'
        >
          <img
            src={video.thumbnail}
            className='card-img-top'
            alt={video.title}
          />
        </NavLink>
        <div className='card-body'>
          <NavLink
            to={`/category/${video.category}/${video._id}`}
            className='text-decoration-none text-dark'
          >
            <h6>{video.title}</h6>
          </NavLink>
          <div className='d-flex align-items-center'>
            <div>
              <img
                src='https://picsum.photos/25/25'
                className='img-fluid rounded-circle'
                width='25px'
              />
            </div>
            <div className='d-flex flex-column justify-content-start mx-2'>
              <span>
                <sub>{video.category}</sub>
              </span>

              <span>
                <sub>
                  {video.views} views | {video.creator}
                </sub>
              </span>
            </div>
          </div>
        </div>
        {WatchListLogic}
      </div>
    </div>
  );
};
export default VideoCard;
