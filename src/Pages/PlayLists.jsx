import { useContext, useState } from 'react';
import { PlayListsContext } from '../Context/PlayListsContext';
import { v4 as uuidv4 } from 'uuid';

const PlayLists = () => {
  const [addPlayListHandler, setAddPlayList] = useState({
    title: '',
    desc: '',
  });
  const { PlayListList, addPlayList, RemovePlayList } =
    useContext(PlayListsContext);

  return (
    <>
      <h1>Playlists</h1>
      <div className='row g-3'>
        <div className='col-12 border rounded bg-light p-4'>
          <h6>Add New Playlist</h6>
          <div className='mb-3'>
            <label htmlFor='Title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              id='Title'
              onChange={(e) => {
                setAddPlayList({
                  ...addPlayListHandler,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Description' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='Description'
              onChange={(e) => {
                setAddPlayList({ ...addPlayListHandler, desc: e.target.value });
              }}
            />
          </div>
          <button
            className='btn btn-primary'
            onClick={() => {
              addPlayList({
                ...addPlayListHandler,
                _id: uuidv4(),
                thumbnail: 'https://picsum.photos/300/175',
              });
            }}
          >
            Submit
          </button>
        </div>
        {PlayListList &&
          PlayListList.map((playlist) => (
            <div key={playlist._id} className='col-3'>
              <div className='card' style={{ maxWidth: '300px' }}>
                <img
                  src={playlist.thumbnail}
                  className='card-img-top'
                  alt={playlist.title}
                />
                <div className='card-body'>
                  <h6>{playlist.title}</h6>
                  <p>{playlist.desc}</p>
                </div>
                <button
                  onClick={() => RemovePlayList(playlist._id)}
                  className='btn btn-danger'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default PlayLists;
