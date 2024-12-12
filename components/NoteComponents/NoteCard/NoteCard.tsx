'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  label?: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{note.title}</h3>
        <Button 
          onClick={() => onDelete(note.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </Button>
      </div>
      <p className="text-gray-700 mb-2">{note.content}</p>
      <div className="text-sm text-gray-500">
        {note.date}
        {note.label && <span className="ml-2">• {note.label}</span>}
      </div>
    </Card>
  );
}