import { VFC } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import { Task } from '../interfaces/models';

const ReactQueryB: VFC = () => {
  const history = useHistory();

  const queryClient = useQueryClient();
  const tasks = queryClient.getQueryData<Task[]>('tasks');

  console.log('rendered ReactQueryB');

  return (
    <>
      <p className="font-bold my-3">React Query B</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}

      <ChevronDoubleLeftIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => {
          history.push('/');
        }}
      />
      <p className="text-sm">React Query A</p>
    </>
  );
};

export default ReactQueryB;
