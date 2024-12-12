'use client';
import { Button } from '@/components/ui/button';

interface NoteAdditionButtonProps {
  onClick: () => void;
}

export default function NoteAdditionButton({ onClick }: NoteAdditionButtonProps) {
  return (
    <Button onClick={onClick} className="mt-4">
      Add Note
    </Button>
  );
}