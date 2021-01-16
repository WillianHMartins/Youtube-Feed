import { destroy, get, patch, post } from '../http';

const BASE_API = '/api/users';

export const DESTROY_USER_URL = id => `${BASE_API}/${id}`;
export async function destroyUserById(id) {
  return destroy(DESTROY_USER_URL(id));
}

export async function getUsers() {
  return get(BASE_API);
}

export async function getUserById(id) {
  return get(`${BASE_API}/${id}`);
}

export const GET_USERS_AND_ROLES_URL = `${BASE_API}AndRoles/`;
export async function getUsersAndRoles() {
  return get(GET_USERS_AND_ROLES_URL);
}

export const GET_USER_VIDEO_FEED_URL = id => `${BASE_API}/${id}/videoFeed/`;
export async function getUserVideoFeed({ id, body }) {
  return post(GET_USER_VIDEO_FEED_URL(id), body);
}

export async function persistUser({ id, ...user }) {
  if (id) {
    return patch(`${BASE_API}/${id}`, user);
  }
  return post(BASE_API, user);
}

export async function updatePassword({ id, ...user }) {
  return patch(`${BASE_API}/credentials/${id}`, user);
}
