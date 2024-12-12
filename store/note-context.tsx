'use client';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  label?: string;
}

interface ContextProps {
  children: ReactNode;
}

const NoteContext = createContext({
  noteList: [] as Note[],
  addNote: (note: Note) => {},
  deleteNote: (id: string) => {},
});

const NoteContextProvider: FC<ContextProps> = ({ children }) => {
  const [noteList, setNoteList] = useState<Note[]>([]);

  const getNotesFromLocalStorage = useCallback(() => {
    if (localStorage.getItem('notes') != null) {
      setNoteList(JSON.parse(localStorage.getItem('notes')!));
    }
  }, []);

  const addNote = useCallback((note: Note) => {
    setNoteList((prevList) => {
      const newList = [...prevList, note];
      localStorage.setItem('notes', JSON.stringify(newList));
      return newList;
    });
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNoteList((prevList) => {
      const updatedList = prevList.filter((note) => note.id !== id);
      localStorage.setItem('notes', JSON.stringify(updatedList));
      return updatedList;
    });
  }, []);

  useEffect(() => {
    getNotesFromLocalStorage();
  }, [getNotesFromLocalStorage]);

  return (
    <NoteContext.Provider
      value={{
        noteList: noteList,
        addNote: addNote,
        deleteNote: deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteContextProvider };