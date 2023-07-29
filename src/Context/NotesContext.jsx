import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from 'use-local-storage';

const NotesContext = createContext({});

const NotesProvider = ({ children }) => {
  const [notesList, setNotesList] = useLocalStorage('Notes', []);

  const addNotes = (vidId, text) => {
    const tempNotes = { _id: uuidv4(), content: text, video: vidId };
    setNotesList([...notesList, tempNotes]);
  };

  const editNotes = (id, text) => {
    const tempNotes = notesList.reduce(
      (allNotes, currentNote) =>
        currentNote._id === id
          ? [...allNotes, { ...currentNote, content: text }]
          : [...allNotes, currentNote],
      []
    );
    setNotesList(tempNotes);
  };

  const removeNotes = (id) => {
    setNotesList(notesList.filter((note) => note._id !== id));
  };

  return (
    <NotesContext.Provider
      value={{ addNotes, editNotes, removeNotes, notesList }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
