'use strict';

const { create, validate } = require('./token');

describe('User JWT', () => {
  it('should create string tokens', async () => {
    const token = await create({ username: 'admin' });
    expect(typeof token).toBe('string');
  });

  it('should validate created tokens', async () => {
    const token = await create({ username: 'admin' });
    const decoded = await validate(token);
    expect(decoded).toMatchObject({ username: 'admin' });
  });

  it('should accept multiple parameters as data', async () => {
    const token = await create({ username: 'admin', id: 4242 });
    const decoded = await validate(token);
    expect(decoded).toMatchObject({ username: 'admin', id: 4242 });
  });
  it('should throw if signature does not match', async () => {
    // default token from jwt.io
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF' +
      '0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    await expect(validate(token)).rejects.toThrow();
  });
});
