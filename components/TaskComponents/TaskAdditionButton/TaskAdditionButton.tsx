'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import TaskForm from '@/components/TaskComponents/TaskForm/TaskForm';
import { TaskFormType } from '@/types/TaskTypes';

// simple component that shows a form dialog to add tasks when button is pressed
function TaskAdditionButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add Task Information</DialogDescription>
        </DialogHeader>
        <TaskForm setOpen={setOpen} version={TaskFormType.NewForm} />
      </DialogContent>
    </Dialog>
  );
}

export default TaskAdditionButton;
