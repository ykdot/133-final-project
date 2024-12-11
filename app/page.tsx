import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'College Digital Assistant',
};

// show basic information about web project and links to task-list and notes
export default function Home() {
  return (
    <header
      className={
        'flex flex-col content-center justify-center px-80 pt-80 gap-3'
      }
    >
      <h1 className={'m-auto text-4xl'}>Track Your Academic Goals</h1>
      <p className={'m-auto'}>
        Designed to help students track their daily, weekly and monthly tasks
        and stay organized during their academic year. The assistant aids in
        managing class assignments, extracurricular commitments, note-taking,
        and organizing events.
      </p>
      <div className="flex gap-3">
        <Button className={'w-25 m-auto'}>
          <Link href="/task-list">Create Task List</Link>
        </Button>
        <Button className={'w-25 m-auto'}>
          <Link href="/notes">Take Notes</Link>
        </Button>
      </div>
    </header>
  );
}
