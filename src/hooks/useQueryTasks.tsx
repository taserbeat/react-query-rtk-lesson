import { useQuery } from 'react-query';
import axios from 'axios';
import { Task } from '../interfaces/models';

const getTasks = async () => {
  const response = await axios.get<Task[]>('http://localhost:8000/api/tasks');
  const tasks = response.data;

  return tasks;
};

const useQueryTasks = () => {
  const queryResultTasks = useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,

    /*
    このカスタムフックを呼び出しているコンポーネントがアンマウントされてから
    cacheTime[ミリ秒]経過すると取得したfetchデータを削除する。
    (ガベッジコレクタでメモリの不要なデータを解放してくれる。)
    */
    cacheTime: 30000,

    /*
    fetchで取得したデータを「古い」と見倣す時間[ms]を指定する。
    fetchしたデータはfetch直後にfresh状態となるが、staleTime[ミリ秒]経過すると、stale状態となる。
    fresh状態であればコンポーネントがマウントされてもfetchが行われなくなるが、
    stale状態であればマウント時にfetchが行われる。
    */
    staleTime: 30000,
  });

  return queryResultTasks;
};

export default useQueryTasks;
