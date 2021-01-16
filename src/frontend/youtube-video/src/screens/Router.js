import React from 'react';

import { createBrowserRouter, Redirect } from 'found';

import AppRoute from './App';

import RenderError from './RenderError';

import HomeRoute from './Home';
import LoginRoute from './Login';
import UserRoute from './Profile/User';
import VideoFeedRoute from './Profile/VideoFeed';

import RolesRoute from './Records/Roles';
import UsersRoute from './Records/Users';

const routeConfig = [
  {
    ...AppRoute,
    children: [
      new Redirect({ from: AppRoute.path, to: `${HomeRoute.path}` }),
      { ...HomeRoute },
      { ...LoginRoute },
      { ...UserRoute },
      { ...VideoFeedRoute },
      { ...RolesRoute },
      { ...UsersRoute },
    ],
  },
];

export default createBrowserRouter({
  routeConfig,
  renderError: props => <RenderError props={props} />,
});
