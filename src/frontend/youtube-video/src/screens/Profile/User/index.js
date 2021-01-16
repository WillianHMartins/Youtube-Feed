import React from 'react';

import authComponent from '../../authComponent';
import render from '../../defaultRenderer';

import { getUserById } from '../../../api/users';
import { getUser } from '../../../utils/authentication';

const User = React.lazy(() => import('./User'));

const route = {
  getComponent: authComponent(User),
  getData: async () => getUserById(getUser().id),
  path: '/profile/user',
  render,
};

export default route;
