import { trackPromise } from 'react-promise-tracker';
import APIError from './errors';
import { getToken } from '../utils/authentication';

const validate = async response => {
  const { status } = response;

  const json = await response.json();

  // server error message
  if (status >= 400) {
    APIError({ ...response, ...json });
  }

  // json error message
  if (json.error) {
    throw new Error(json.message);
  }

  return json;
};

async function execute(url, method, { content } = {}) {
  const token = getToken();
  const response = await trackPromise(
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': content ? 'application/json' : undefined,
        Authorization: token && token.length ? `Bearer ${token}` : undefined,
      },
      method,
      body: content ? JSON.stringify(content) : undefined,
    })
  );
  return validate(response);
}

export async function destroy(url, content) {
  return execute(url, 'DELETE', {
    content,
  });
}

export async function get(url, content) {
  return execute(url, 'GET', {
    content,
  });
}

export async function post(url, content) {
  return execute(url, 'POST', {
    content,
  });
}

export async function patch(url, content) {
  return execute(url, 'PATCH', {
    content,
  });
}
