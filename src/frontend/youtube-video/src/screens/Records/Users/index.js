import React from 'react';

import authComponent from '../../authComponent';
import render from '../../defaultRenderer';

import { isRole } from '../../../utils/authentication';
import { getUsersAndRoles } from '../../../api/users';

const Users = React.lazy(() => import('./Users'));
const roles = ['admin'];

const route = {
  getComponent: authComponent(Users, roles),
  getData: isRole(roles) ? getUsersAndRoles : undefined,
  path: '/records/users',
  render,
};

export default route;
