import type { Metadata } from 'next';
import TaskPageStructure from '@/components/TaskComponents/TaskPageStructure/TaskPageStructure';
import QuoteContainer from '@/components/QuoteContainer/QuoteContainer';

export const metadata: Metadata = {
  title: 'Tasks',
};

// show quote on top and task-list in middle
export default function TaskPage() {
  return (
    <div className="z-10">
      <QuoteContainer />
      <TaskPageStructure />
    </div>
  );
}
