import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/components/Layout';
import { routeConfig } from 'src/routes/index';
interface Props {
  basename?: string;
}
const App: React.FC<Props> = (props) => {
  const { basename } = props;

  return (
    <BrowserRouter basename={basename}>
      <Route
        path={'/'}
        component={(props) => (
          <Layout {...props}>
            <Switch>
              {routeConfig.map((item, idx) => {
                const { path } = item;
                return <Route key={idx} path={path ? `${path}/` : path} component={item.element}></Route>;
              })}
              <Route component={() => <div>Route Not Found</div>}></Route>
            </Switch>
          </Layout>
        )}
      ></Route>
    </BrowserRouter>
  );
};

export default App;
