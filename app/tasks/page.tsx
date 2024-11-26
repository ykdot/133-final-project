import type { Metadata } from "next";
import TaskList from "@/components/TaskList/TaskList";
import { TaskObject, TaskPriority } from "@/types/TaskTypes";

export const metadata: Metadata = {
  title: "Tasks",
};

const tasks: Array<TaskObject> = [
  {
    id: 1,
    taskName: "Submit Math homework on derivatives",
    date: "2024-11-25",
    priority: TaskPriority.High,
    label: "MATH101 - Mathematics",
  },
  {
    id: 2,
    taskName: "Attend History lecture on World War II",
    date: "2024-11-26",
    priority: TaskPriority.Medium,
    label: "HIST202 - History",
  },
  {
    id: 3,
    taskName: "Prepare for Chemistry lab practical exam",
    date: "2024-11-27",
    priority: TaskPriority.High,
    label: "CHEM105 - Chemistry",
  },
  {
    id: 4,
    taskName: "Photography Club meeting and photo contest",
    date: "2024-11-28",
    priority: TaskPriority.Medium,
    label: "Photography Club",
  },
  {
    id: 5,
    taskName: "Coding Club workshop on web development",
    date: "2024-11-29",
    priority: TaskPriority.Low,
    label: "Coding Club",
  },
  {
    id: 6,
    taskName: "Attend debate competition preparation session",
    date: "2024-11-30",
    priority: TaskPriority.High,
    label: "Debate Club",
  },
];

export default function TaskPage() {
  return (
    <div className="pt-10">
      <TaskList tasks={tasks} />
    </div>
  );
}
