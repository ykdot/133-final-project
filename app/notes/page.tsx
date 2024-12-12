// app/notes/page.tsx
import type { Metadata } from 'next';
import QuoteContainer from '@/components/QuoteContainer/QuoteContainer';
import NotePageStructure from '@/components/NoteComponents/NotePageStructure/NotePageStructure';
import { NoteContextProvider } from '@/store/note-context';

export const metadata: Metadata = {
  title: 'Notes',
};

export default function NotesPage() {
  return (
    <>
      <QuoteContainer />
      <NoteContextProvider>
        <NotePageStructure />
      </NoteContextProvider>
    </>
  );
}
