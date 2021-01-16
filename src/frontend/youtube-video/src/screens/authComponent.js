/* eslint-disable no-alert */

// API responses that affect page rendering
// https://www.npmjs.com/package/found#error-handling
import { HttpError } from 'found';

import { isLoggedIn, isRole } from '../utils/authentication';

export default (component, roles) => () => {
  if (isLoggedIn()) {
    if (!isRole(roles)) {
      throw new HttpError(
        401,
        'Seu usuário não tem as permissões necessárias para acessar esse módulo.'
      );
    }
    return component;
  }
  window.alert('Login expirado');
  return window.location.replace('/login');
};
