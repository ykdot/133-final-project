'use client';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface ContextProps {
  children: ReactNode;
}

const TaskContext = createContext({
  taskList: [] as any[],
  addTask: (task: object) => {},
  editTask: (id: number, newInfo: object) => {},
  deleteTask: (id: number) => {},
});

// set up provider to show UI changes to task list when the task list is changed
const TaskContextProvider: FC<ContextProps> = ({ children }) => {
  const [taskList, setTaskList] = useState<Array<Object>>([]);
  const getTasksFromLocalStorage = useCallback(() => {
    if (localStorage.getItem('tasks') != null) {
      setTaskList(JSON.parse(localStorage.getItem('tasks')!));
    }
  }, []);

  const addTask = useCallback((task: object) => {
    task = Object.assign(task, { done: false });
    setTaskList((prevList) => {
      const newList = [...prevList, task];
      localStorage.setItem('tasks', JSON.stringify(newList));
      return newList;
    });
  }, []);

  const editTask = useCallback((id: number, newInfo: object) => {
    setTaskList((prevList) => {
      const updatedList = [
        ...prevList.slice(0, id),
        newInfo,
        ...prevList.slice(id + 1),
      ];
      localStorage.setItem('tasks', JSON.stringify(updatedList));
      return updatedList;
    });
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTaskList((prevList) => {
      const updatedList = prevList.filter((_, index) => index !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedList));
      return updatedList;
    });
  }, []);

  useEffect(() => {
    getTasksFromLocalStorage();
  }, [getTasksFromLocalStorage]);
  return (
    <TaskContext.Provider
      value={{
        taskList: taskList,
        addTask: addTask,
        editTask: editTask,
        deleteTask: deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
