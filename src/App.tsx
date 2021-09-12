import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from './components/Layout';
import { StateProvider } from './contexts/StateProvider';
import ClassicalFetchA from './components/ClassicalFetchA';
import ClassicalFetchB from './components/ClassicalFetchB';
import ReactQueryA from './components/ReactQueryA';
import ReactQueryB from './components/ReactQueryB';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // デフォルトだとfetchに失敗すると3回までリトライするので、それを無効にする
      retry: false,

      // デフォルトだとユーザーがブラウザ画面をフォーカスするとfetchが再度走るが、余計なfetchを防ぐために無効にする
      refetchOnWindowFocus: false,
    },
  },
});

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <ReactQueryA />
              </Route>

              <Route exact path="/query-b">
                <ReactQueryB />
              </Route>

              <Route exact path="/fetch-a">
                <ClassicalFetchA />
              </Route>

              <Route exact path="/fetch-b">
                <ClassicalFetchB />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
