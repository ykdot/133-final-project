import { TaskObject, TaskPriority } from "@/types/TaskTypes";

function convertTaskPriorityToText(priority: TaskPriority) {
  if (priority == TaskPriority.High) {
    return "High Priority";
  } else if (priority == TaskPriority.Medium) {
    return "Medium Priority";
  } else {
    return "Low Priority";
  }
}

export default function TaskCard({ task }: { task: TaskObject }) {
  const textPriorty = convertTaskPriorityToText(task.priority);
  return (
    <li className="flex justify-between p-5 border-t-2 border-x-2 border-solid hover:bg-slate-300">
      <p className="w-3/5">{task.taskName}</p>
      <p className="w-1/5">{task.date}</p>
      <p className="w-1/5">{textPriorty}</p>
    </li>
  );
}
