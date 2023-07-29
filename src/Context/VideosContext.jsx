import { createContext, useState } from 'react';
import VideosData from '../Data/VideosData';

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [VideosList, setVideosList] = useState(VideosData);
  const [CurrentVideo, setCurrentVideo] = useState();

  const setVideo = (videoId) => {
    setCurrentVideo(
      VideosList.find((video) => video._id.toString() === videoId)
    );
  };

  return (
    <VideosContext.Provider
      value={{
        VideosList,
        setVideosList,
        CurrentVideo,
        setCurrentVideo,
        setVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export { VideosContext, VideosProvider };
