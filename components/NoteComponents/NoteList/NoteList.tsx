'use client';
interface Note {
    id: string;
    title: string;
    content: string;
    date: string;
    label?: string;
  }
  
  interface NoteListProps {
    notes: Note[];
    onDelete: (id: string) => void;
  }
  
  import NoteCard from '../NoteCard/NoteCard';
  
  export default function NoteList({ notes, onDelete }: NoteListProps) {
    if (notes.length === 0) {
      return <p className="text-center mt-4 text-gray-500">No notes yet.</p>;
    }
  
    return (
      <div className="space-y-4 mt-6">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} />
        ))}
      </div>
    );
  }