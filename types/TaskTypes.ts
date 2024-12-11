
// enum for TaskPriority
export enum TaskPriority {
  Low = '1',
  Medium = '2',
  High = '3',
}

// interface for TaskObject
export interface TaskObject {
  id: number;
  task_name: string;
  date: Date;
  priority: TaskPriority;
  label: string;
  done?: boolean
}

// enum to differentiate between two different forms
export enum TaskFormType {
  NewForm,
  EditForm
}