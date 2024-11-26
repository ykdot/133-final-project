export enum TaskPriority {
  Low = 1,
  Medium = 2,
  High = 3,
}

export interface TaskObject {
  id: number;
  taskName: string;
  date: string;
  priority: TaskPriority;
  label: string;
}
