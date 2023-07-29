import { useContext, useState } from 'react';
import { VideosContext } from '../Context/VideosContext';
import VideoCard from '../Components/VideoCard';

const Explore = () => {
  const { VideosList } = useContext(VideosContext);
  const [searchText, setSearchText] = useState();

  return (
    <>
      <h1>Explore</h1>
      <div className='row g-5 my-1'>
        <div className='col-12'>
          <div className='mb-3'>
            <input
              type='text'
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              className='form-control'
              placeholder='Search video by title'
            />
          </div>
        </div>
        {VideosList.filter((video) =>
          searchText
            ? video.title.toLowerCase().includes(searchText.toLowerCase())
            : true
        ).map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </>
  );
};
export default Explore;
