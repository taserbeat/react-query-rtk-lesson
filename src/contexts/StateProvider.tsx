import React, { useState, useContext, createContext } from 'react';
import { Task } from '../interfaces/models';

interface StateContextType {
  tasks: Task[] | null;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext({} as StateContextType);

export const StateProvider: React.FC = (props) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <StateContext.Provider
      value={{ tasks, setTasks, isDarkMode, setIsDarkMode }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => useContext(StateContext);
