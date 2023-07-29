import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';

const PlayListsContext = createContext();

const PlayListsProvider = ({ children }) => {
  const [PlayListList, setPlayListList] = useLocalStorage('WatchLater', []);

  const addPlayList = (newPlaylist) => {
    setPlayListList((prevState) =>
      prevState.filter((video) => video._id !== video._id)
        ? [...prevState, newPlaylist]
        : [...prevState]
    );
  };

  const RemovePlayList = (id) => {
    setPlayListList((prevState) => [
      ...prevState.filter((video) => video._id !== id),
    ]);
  };

  return (
    <PlayListsContext.Provider
      value={{ PlayListList, addPlayList, RemovePlayList }}
    >
      {children}
    </PlayListsContext.Provider>
  );
};

export { PlayListsContext, PlayListsProvider };
