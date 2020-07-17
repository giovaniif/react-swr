import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={UserList} />
      <Route path="/users/:id" exact component={UserDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;