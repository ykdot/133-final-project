import { useContext } from 'react';
import { TaskContext } from '@/store/task-context';
import TaskAdditionButton from '../TaskAdditionButton/TaskAdditionButton';
import TaskCard from '../TaskCard/TaskCard';

// display task list to UI
export default function TaskList() {
  const taskCtx = useContext(TaskContext);
  let taskList;

  // if there is task in storage
  if (taskCtx.taskList.length > 0) {
    taskList = (
      <ul className="flex flex-col border-b-2 border-solid w-full">
        {taskCtx.taskList.map((task, index) => (
          <TaskCard key={index} index={index} task={task} />
        ))}
      </ul>
    );
  } else {
    // if there is no tasks in storage
    taskList = (
      <div className="p-5 border-t-2 border-x-2 border-b-2 border-solid w-full">
        <p className="text-center">No Tasks</p>
      </div>
    );
  }
  return (
    <div className="w-9/12 m-0 m-auto relative top-1/2">
      <div className="flex flex-col gap-3 justify-content items-center">
        <h1 className="text-3xl">Task List</h1>
        {taskList}
        <TaskAdditionButton />
      </div>
    </div>
  );
}
