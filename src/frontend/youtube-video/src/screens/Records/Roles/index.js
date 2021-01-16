import React from 'react';

import authComponent from '../../authComponent';
import render from '../../defaultRenderer';

import { getRoles } from '../../../api/roles';

const Roles = React.lazy(() => import('./Roles'));

const route = {
  getComponent: authComponent(Roles),
  getData: getRoles,
  path: '/records/roles',
  render,
};

export default route;
