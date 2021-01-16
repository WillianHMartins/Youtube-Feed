import { get, patch, post } from '../http';

const BASE_API = '/api/roles';

export async function disableRoleById(id) {
  return patch(`${BASE_API}/disable/${id}`);
}

export const GET_ROLES_URL = `${BASE_API}/`;
export async function getRoles() {
  return get(GET_ROLES_URL);
}

export async function persistRole({ id, ...role }) {
  if (id) {
    return patch(`${BASE_API}/${id}`, role);
  }
  return post(BASE_API, role);
}
