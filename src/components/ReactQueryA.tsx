import { VFC } from 'react';
import { useHistory } from 'react-router';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

import useQueryTasks from '../hooks/useQueryTasks';

const ReactQueryA: VFC = () => {
  const history = useHistory();

  const { status, data: tasks } = useQueryTasks();

  console.log('rendered ReactQueryA');

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;

  return (
    <>
      <p className="font-bold my-3">React Query A</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}

      <ChevronDoubleRightIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => {
          history.push('/query-b');
        }}
      />
      <p className="text-sm">React Query B</p>
    </>
  );
};

export default ReactQueryA;
