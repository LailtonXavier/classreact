import React from 'react';
import { Switch } from 'react-router-dom';

import User from '../pages/User';
import Users from '../pages/Users';
import Photo from '../pages/Photo';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';

import MyRouter from './MyRouter';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Users} isClosed={false} />
      <MyRouter exact path="/aluno/:id/edit" component={User} isClosed />
      <MyRouter exact path="/aluno/" component={User} isClosed />
      <MyRouter exact path="/fotos/:id" component={Photo} isClosed />
      <MyRouter exact path="/login/" component={Login} isClosed={false} />
      <MyRouter exact path="/register/" component={Register} isClosed={false} />
      <MyRouter exact path="*" component={Error404} />
    </Switch>
  );
}
