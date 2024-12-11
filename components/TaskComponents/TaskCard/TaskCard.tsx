import { useContext } from 'react';
import { TaskContext } from '@/store/task-context';
import { TaskObject, TaskPriority } from '@/types/TaskTypes';
import TaskCardDropDownMenu from '../TaskCardDropDownMenu/TaskCardDropDownMenu';

// convert Task Priority of task to text
function convertTaskPriorityToText(priority: TaskPriority) {
  if (priority == TaskPriority.High) {
    return 'High Priority';
  } else if (priority == TaskPriority.Medium) {
    return 'Medium Priority';
  } else {
    return 'Low Priority';
  }
}

// Component that shows details of task
export default function TaskCard({
  index,
  task,
}: {
  index: number;
  task: TaskObject;
}) {
  const taskCtx = useContext(TaskContext);

  // function that changes status of task to be done or not done
  const handleClick = () => {
    console.log(index);
    taskCtx.taskList[index].done = !taskCtx.taskList[index].done;
    taskCtx.editTask(index, taskCtx.taskList[index]);
  };
  const date = new Date(task.date);
  const textPriorty = convertTaskPriorityToText(task.priority);
  const string_date =
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

  let background;
  let textColor;
  let hoverBackground;
  // if task is done, background color will be gray
  if (task.done) {
    background = 'bg-slate-300';
    textColor = 'text-gray';
    hoverBackground = 'hover:bg-yellow-300';
  } else {
    background = 'bg-white';
    textColor = 'text-black';
    hoverBackground = 'hover:bg-slate-300';
  }
  // will show info on task name, date, priority, and label
  return (
    <li
      className={`flex justify-between p-5 border-t-2 border-x-2 border-solid ${textColor} ${background} ${hoverBackground}`}
      onClick={handleClick}
    >
      <p className="w-3/5">{task.task_name}</p>
      <p className="w-1/5">{string_date}</p>
      <p className="w-1/5">{textPriorty}</p>
      <p className="w-1/5">{task.label}</p>
      <TaskCardDropDownMenu id={index} />
    </li>
  );
}
