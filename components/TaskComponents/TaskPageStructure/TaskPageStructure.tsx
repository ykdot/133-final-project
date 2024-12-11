'use client';
import TaskList from '../TaskList/TaskList';
import { TaskContextProvider } from '@/store/task-context';

// structure to implement context in task-list, to help with add, edit, and delete tasks
export default function TaskPageStructure() {
  return (
    <TaskContextProvider>
      <div className="pt-10">
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
