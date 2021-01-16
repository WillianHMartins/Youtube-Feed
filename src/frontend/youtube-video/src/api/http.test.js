import fetchMock from 'fetch-mock';

import { get } from './http';

describe('API HTTP', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('GETs content from a URL as json', async () => {
    fetchMock.get('/test', { payload: 42 });
    const content = await get('/test');
    expect(content).toEqual({ payload: 42 });
  });

  it('throws if response returns a json with an error key', async () => {
    fetchMock.get('/test', {
      error: 'ErrorClassName',
      message: 'Invalid token specified',
    });
    await expect(get('/test')).rejects.toThrow('Invalid token specified');
  });
});
