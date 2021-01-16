'use strict';

const createRole = require('./create');

const data = require('./role.test.data');
const { create, drop } = require('../../dbLoader');

describe('Role create', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should create a role', async () => {
    const item = {
      name: 'NAME',
      description: 'description',
    };
    const role = await createRole(item);
    expect(role).toMatchObject({
      ...item,
      is_active: true,
    });
  });

  it('should create a role disabled', async () => {
    const item = {
      name: 'NAME A',
      description: '',
      is_active: false,
    };
    const role = await createRole(item);
    expect(role).toMatchObject(role);
  });
});
