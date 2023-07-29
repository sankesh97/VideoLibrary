import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { WatchLaterContext } from '../Context/WatchLaterContext';
import { VideosContext } from '../Context/VideosContext';
import { NotesContext } from '../Context/NotesContext';

const SingleVideo = () => {
  const { videoId, categoryName } = useParams();
  const { VideosList, CurrentVideo, setVideo } = useContext(VideosContext);
  const { WatchLaterList, addToWatchList, RemoveFromWatchList } =
    useContext(WatchLaterContext);
  const { notesList, addNotes, editNotes, removeNotes } =
    useContext(NotesContext);
  const [showAdd, setshowAdd] = useState();
  const [editNote, setEditNote] = useState();

  const currentnote = useRef();

  useEffect(() => {
    setVideo(videoId);
  }, [videoId]);

  //WatchLaterListLogic
  const WatchListLogic = WatchLaterList.find(
    (WatchListVideo) => WatchListVideo._id === CurrentVideo._id
  ) ? (
    <i
      onClick={() => {
        RemoveFromWatchList(CurrentVideo._id);
      }}
      className='bi bi-clock-fill mx-2'
    ></i>
  ) : (
    <i
      onClick={() => {
        addToWatchList(CurrentVideo);
      }}
      className='bi bi-clock mx-2'
    ></i>
  );

  return (
    <>
      <div className='row'>
        <div className='col-md-8'>
          {CurrentVideo ? (
            <>
              <iframe
                width='100%'
                height='400px'
                src={CurrentVideo.src}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://picsum.photos/25/25'
                    className='img-fluid rounded-circle me-2'
                    width='25px'
                  />
                  <h6 className='align-self-center'>{CurrentVideo.title}</h6>
                </div>
                <div>
                  {WatchListLogic}
                  <i className='bi bi-file-earmark-plus mx-2'></i>
                  <i
                    onClick={() => {
                      setshowAdd('Add');
                    }}
                    className='bi bi-card-text mx-2'
                  ></i>
                </div>
              </div>
            </>
          ) : (
            <p>There is some issue with the video</p>
          )}
          <hr />
          <h3>Notes</h3>

          {showAdd === 'Add' && (
            <div className='border p-2 mb-3 bg-light rounded'>
              <p>Add the note</p>
              <input type='text' ref={currentnote} />
              <button
                className='btn btn-primary mx-2'
                onClick={() => {
                  addNotes(videoId, currentnote.current.value);
                  currentnote.current.value = '';
                  setshowAdd(false);
                }}
              >
                Submit
              </button>
            </div>
          )}

          {showAdd === 'Edit' && (
            <div className='border p-2 mb-3 bg-light rounded'>
              <p>Edit the note</p>
              <input
                type='text'
                value={editNote.content}
                onChange={(event) => {
                  setEditNote({ ...editNote, content: event.target.value });
                }}
              />
              <button
                className='btn btn-primary mx-2'
                onClick={() => {
                  editNotes(editNote._id, editNote.content);
                  setEditNote();
                  setshowAdd(false);
                }}
              >
                Submit
              </button>
            </div>
          )}

          {notesList &&
            notesList
              .filter((note) => note.video === videoId)
              .map((note) => (
                <div className='d-flex justify-content-between' key={note._id}>
                  {note.content}
                  <div>
                    <i
                      onClick={() => {
                        setEditNote({ id: note._id, content: note.content });
                        setshowAdd('Edit');
                      }}
                      className='bi bi-pencil-square mx-2'
                    ></i>
                    <i
                      onClick={() => {
                        removeNotes(note._id);
                      }}
                      className='bi bi-trash3'
                    ></i>
                  </div>
                </div>
              ))}
        </div>
        <div className='col-md-4'>
          <h3>More Videos</h3>
          <div className='d-flex flex-column'>
            {[...VideosList].splice(0, 4).map((video) => (
              <div className='d-flex my-2' key={video._id}>
                <img src={video.thumbnail} className='me-2' width='200px' />
                <NavLink
                  to={`/category/${video.category}/${video._id}`}
                  className='text-decoration-none text-dark'
                >
                  <div>
                    <h6>{video.title}</h6>
                    <p>{video.creator}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleVideo;
