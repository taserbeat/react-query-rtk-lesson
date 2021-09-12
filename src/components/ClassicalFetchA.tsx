import { VFC } from 'react';
import { useHistory } from 'react-router';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

import useClassicalFetch from '../hooks/useClassicalFetch';

const ClassicalFetchA: VFC = () => {
  const history = useHistory();

  const { tasks, isLoading, isError } = useClassicalFetch();
  console.log('rendered ClassicalFetchA');

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>

      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}

      <ChevronDoubleRightIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => {
          history.push('/fetch-b');
        }}
      />
      <p className="text-sm">fetch B</p>
    </div>
  );
};

export default ClassicalFetchA;
