import { createContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [WatchLaterList, setWatchLaterList] = useLocalStorage('WatchLater', []);

  const addToWatchList = (video) => {
    setWatchLaterList((prevState) =>
      prevState.filter((video) => video._id !== video._id)
        ? [...prevState, video]
        : [...prevState]
    );
  };

  const RemoveFromWatchList = (id) => {
    setWatchLaterList((prevState) => [
      ...prevState.filter((video) => video._id !== id),
    ]);
  };

  return (
    <WatchLaterContext.Provider
      value={{ WatchLaterList, addToWatchList, RemoveFromWatchList }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { WatchLaterContext, WatchLaterProvider };
