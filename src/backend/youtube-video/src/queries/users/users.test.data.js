'use strict';

const { subYears } = require('date-fns');

module.exports = [
  {
    model: 'role',
    data: [
      {
        id: 1,
        name: 'ROLE1',
        description: '',
      },
      {
        id: 2,
        name: 'ROLE2',
        description: '',
      },
      {
        id: 3,
        name: 'ROLE3',
        description: '',
      },
      {
        id: 4,
        name: 'ROLE4',
        description: '',
        is_active: false,
      },
    ],
  },
  {
    model: 'user',
    data: [
      {
        name: 'USER 1',
        username: 'USER1',
        password: 'Password1',
        role_id: 1,
        last_password_update: new Date(),
      },
      {
        name: 'USER 2',
        username: 'USER2',
        password: 'Password2',
        role_id: 2,
      },
      {
        name: 'USER 3',
        username: 'USER3',
        password: 'Password3',
        role_id: 3,
        last_password_update: subYears(new Date(), 1),
      },
      {
        name: 'USER 4',
        username: 'USER4',
        password: 'Password4',
        role_id: 2,
      },
      {
        name: 'USER 5',
        username: 'USER5',
        password: 'Password5',
        role_id: 4,
      },
    ],
  },
];
