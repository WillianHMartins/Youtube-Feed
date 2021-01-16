import React from 'react';

import render from '../defaultRenderer';

const Login = React.lazy(() => import('./Login'));

const route = {
  Component: Login,
  path: '/login',
  render,
};

export default route;
