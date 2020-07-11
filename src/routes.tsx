import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

const ManyUserList: React.FC = () => (
  <>
    <UserList />
    <UserList />
    <UserList />
  </>
)
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ManyUserList} />
      <Route path="/users/:id" exact component={UserDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;