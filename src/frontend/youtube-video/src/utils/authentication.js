/* eslint no-console: 0 */

import jwtDecode from 'jwt-decode';
import { isEmpty } from 'lodash';

const TOKEN_KEY = 'video_feed_user_token';

export function setToken(token = '') {
  localStorage.setItem(TOKEN_KEY, token);
}

export function isValidToken(token) {
  if (!token || isEmpty(token)) {
    return false;
  }
  try {
    const { app, exp } = jwtDecode(token);
    // check application and expiration (exp is in seconds)
    return app === 'video-feed' && Date.now() < exp * 1000;
  } catch (error) {
    setToken();
    return false;
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function isLoggedIn() {
  const token = getToken();
  return isValidToken(token);
}

export function isRole(roles = []) {
  const token = getToken();
  if (!isValidToken(token)) {
    return false;
  }

  if (roles.length === 0) {
    return true;
  }

  const { role } = jwtDecode(token);
  return !!roles.find(
    item => !!role && role.name.toLowerCase() === item.toLowerCase()
  );
}

export const getUser = () => {
  const token = getToken();
  if (!isValidToken(token)) {
    return null;
  }
  try {
    return jwtDecode(token);
  } catch (e) {
    console.log('Error on decode', e);
    return null;
  }
};
