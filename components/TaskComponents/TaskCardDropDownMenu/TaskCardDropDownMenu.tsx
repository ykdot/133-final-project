'use client';

import { useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from '@/store/task-context';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import TaskForm from '../TaskForm/TaskForm';
import { TaskFormType } from '@/types/TaskTypes';

// a dropdown on TaskCard that displays delete and edit button to invoke those two functionalities
export default function TaskCardDropDownMenu({ id }: { id: number }) {
  const taskCtx = useContext(TaskContext);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // function that is called when delete button is pressed
  const handleDeleteData = (event: React.MouseEvent) => {
    event.stopPropagation(); // prevent editTask from firing at the same time
    taskCtx.deleteTask(id);
    setDeleteDialogOpen(false);
  };
  let handleDelete = <Button onClick={handleDeleteData}>Confirm</Button>;

  return (
    <Dialog
      open={editDialogOpen || deleteDialogOpen}
      onOpenChange={editDialogOpen ? setEditDialogOpen : setDeleteDialogOpen}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {editDialogOpen && (
        <DialogContent>
          <DialogTitle>Edit Task</DialogTitle>
          <TaskForm
            setOpen={setEditDialogOpen}
            version={TaskFormType.EditForm}
            id={id}
          />
        </DialogContent>
      )}
      {deleteDialogOpen && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this task?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            {handleDelete}
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
