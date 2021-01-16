import React from 'react';

import authComponent from '../../authComponent';

import render from '../../defaultRenderer';

import { getUserById } from '../../../api/users';
import { getUser } from '../../../utils/authentication';

const Home = React.lazy(() => import('./VideoFeed'));

const route = {
  getComponent: authComponent(Home),
  getData: async () => getUserById(getUser().id),
  path: '/profile/videoFeed',
  render,
};

export default route;
