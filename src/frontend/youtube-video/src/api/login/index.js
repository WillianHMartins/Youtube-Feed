import { post } from '../http';

const BASE_API = '/api';

export const LOGIN_URL = `${BASE_API}/login`;
export async function login(values) {
  return post(LOGIN_URL, values);
}
