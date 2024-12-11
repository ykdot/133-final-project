'use client';
import { useContext } from 'react';
import { TaskContext } from '@/store/task-context';
import { Button } from '../../ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../../ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TimePicker } from '../../date-time-picker/time-picker';
import { TaskFormType, TaskPriority } from '@/types/TaskTypes';

// form schema
const formSchema = z.object({
  task_name: z.string(),
  date: z.date(),
  priority: z.nativeEnum(TaskPriority),
  label: z.string(),
});

// TaskForm that changes functionality based on if task is being added or being editted
// built on top of the shadcn form component and other libraries
function TaskForm({
  version,
  setOpen,
  id,
}: {
  version: TaskFormType;
  setOpen: Function;
  id?: number;
}) {
  const taskCtx = useContext(TaskContext);

  let defaultValues;
  let buttonText;

  // changes functionality based on if task is being added or being edited
  if (version == TaskFormType.EditForm) {
    const task = taskCtx.taskList[id!];
    defaultValues = {
      task_name: task.task_name,
      date: new Date(task.date),
      priority: task.priority,
      label: task.label,
    };
    buttonText = 'Edit Task';
  } else {
    defaultValues = {
      task_name: '',
      date: new Date(),
      label: '',
    };
    buttonText = 'Add Task';
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // submit new or edited info to the TaskContextProvider
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (version == TaskFormType.NewForm) {
      taskCtx.addTask(values);
    } else {
      taskCtx.editTask(id!, values);
    }
    setOpen!(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="Task Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, 'PPP HH:mm:ss')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      initialFocus
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                    <div className="p-3 border-t border-border">
                      <TimePicker setDate={field.onChange} date={field.value} />
                    </div>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Priority Value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={TaskPriority.Low}>Low</SelectItem>
                    <SelectItem value={TaskPriority.Medium}>Medium</SelectItem>
                    <SelectItem value={TaskPriority.High}>High</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label: (Classes, Club, Work, etc)</FormLabel>
              <FormControl>
                <Input placeholder="Label..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{buttonText}</Button>
      </form>
    </Form>
  );
}

export default TaskForm;
