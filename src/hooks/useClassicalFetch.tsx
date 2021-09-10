import { useState, useEffect } from 'react';
import axios from 'axios';

import { useStateContext } from '../contexts/StateProvider';
import { Task } from '../interfaces/models';

/** 従来の手法でfetchを行うフック */
const useClassicalFetch = (): {
  tasks: Task[] | null;
  isLoading: boolean;
  isError: boolean;
} => {
  const { tasks, setTasks } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get<Task[]>(
          'http://localhost:8000/api/tasks'
        );
        setTasks(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setTasks]);

  return {
    tasks,
    isLoading,
    isError,
  };
};

export default useClassicalFetch;
