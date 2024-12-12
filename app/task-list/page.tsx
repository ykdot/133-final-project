// app/task-list/page.tsx
import type { Metadata } from 'next';
import TaskPageStructure from '@/components/TaskComponents/TaskPageStructure/TaskPageStructure';
import QuoteContainer from '@/components/QuoteContainer/QuoteContainer';

export const metadata: Metadata = {
  title: 'Tasks',
};

export default function TaskPage() {
  return (
    <>
    {/* @ts-expect-error Async Server Component */}
      <QuoteContainer />
      <TaskPageStructure />
    </>
  );
}