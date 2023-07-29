import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { VideosContext } from '../Context/VideosContext';
import VideoCard from '../Components/VideoCard';

const Category = () => {
  const { categoryName } = useParams();
  const { VideosList } = useContext(VideosContext);

  return (
    <>
      <h1>{categoryName}</h1>
      <div className='row g-5 my-1'>
        {VideosList.filter((video) => video.category === categoryName).map(
          (video) => (
            <VideoCard key={video._id} video={video} />
          )
        )}
      </div>
    </>
  );
};
export default Category;
