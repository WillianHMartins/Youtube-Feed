import React from 'react';

import authComponent from '../authComponent';

import render from '../defaultRenderer';

const Home = React.lazy(() => import('./Home'));

const route = {
  path: '/home',
  getComponent: authComponent(Home),
  render,
};

export default route;
