import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Kitchen}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Waiter}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
