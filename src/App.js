import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';
import Booking from './components/views/Booking/Booking';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/> 
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter}/>
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
