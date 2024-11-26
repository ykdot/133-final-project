import TaskCard from "../TaskCard/TaskCard";
import { TaskObject, TaskPriority } from "@/types/TaskTypes";

export default function TaskList({ tasks }: { tasks: Array<TaskObject> }) {
  return (
    <div className="w-9/12 m-0 m-auto relative top-1/2">
      <div className="flex flex-col justify-content items-center">
        <h1>Task List</h1>
        <ul className="flex flex-col border-b-2 border-solid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}
