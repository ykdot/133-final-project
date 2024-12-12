'use client';

import { useState, useContext } from 'react';
import NoteList from '../NoteList/NoteList';
import NoteAdditionButton from '../NoteAdditionButton/NoteAdditionButton';
import NoteForm from '../NoteForm/NoteForm';
import { NoteContext } from '@/store/note-context';

export default function NotePageStructure() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { noteList, addNote, deleteNote } = useContext(NoteContext);

  const handleAddNote = (title: string, content: string, label?: string) => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      date: new Date().toLocaleDateString(),
      label,
    };
    addNote(newNote);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Notes</h1>
      <div className="flex justify-center">
        <NoteAdditionButton onClick={() => setIsFormOpen(true)} />
      </div>
      <NoteForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddNote}
      />
      <NoteList notes={noteList} onDelete={deleteNote} />
    </div>
  );
}