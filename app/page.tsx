import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'College Digital Assistant',
};

// show basic information about web project and links to task-list and notes
export default function Home() {
  return (
    <header
      className={
        'flex flex-col content-center justify-center px-30 pt-60 gap-3'
      }
    >
      <h1 className={'m-auto text-4xl w-2/4 text-center'}>
        Track Your Academic Goals
      </h1>
      <p className={'m-auto w-2/4'}>
        Designed to help students track their daily, weekly and monthly tasks
        and stay organized during their academic year. The assistant aids in
        managing class assignments, extracurricular commitments, note-taking,
        and organizing events.
      </p>

      <div className="w-2/4 m-auto">
        <div className={styles['button-list']}>
          <Button className={'w-25 m-auto'}>
            <Link href="/task-list">Create Task List</Link>
          </Button>
          <Button className={'w-25 m-auto'}>
            <Link href="/notes">Take Notes</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
