// app/task-list/page.tsx
import type { Metadata } from 'next';
import TaskPageStructure from '@/components/TaskComponents/TaskPageStructure/TaskPageStructure';
import QuoteContainer from '@/components/QuoteContainer/QuoteContainer';

export const metadata: Metadata = {
  title: 'Tasks',
};

export default function TaskPage() {
  return (
    <div className="z-10">
      <QuoteContainer />
      <TaskPageStructure />
    </div>
  );
}
