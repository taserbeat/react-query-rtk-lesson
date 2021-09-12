import { VFC } from 'react';

import { useStateContext } from '../contexts/StateProvider';

const ContextA: VFC = () => {
  const { isDarkMode, setIsDarkMode } = useStateContext();

  console.log('rendered ContextA');

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">ContextA</p>
      <p className="my-3">{isDarkMode ? 'on' : 'off'}</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => {
          setIsDarkMode((prev) => !prev);
        }}
      >
        toggle mode
      </button>
    </div>
  );
};

export default ContextA;
