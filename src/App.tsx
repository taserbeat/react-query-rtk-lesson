import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StateProvider } from './contexts/StateProvider';
import ClassicalFetchA from './components/ClassicalFetchA';
import ClassicalFetchB from './components/ClassicalFetchB';

import Layout from './components/Layout';

const App: VFC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Switch>
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
  );
};

export default App;
