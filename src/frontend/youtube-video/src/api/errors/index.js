// API responses that affect page rendering
// https://www.npmjs.com/package/found#error-handling
import { HttpError } from 'found';

import sequelizeErrorsHandler from './sequelize';
import passwordErrorsHandler from './password';
import tokenErrorsHandler from './token';

export default error => {
  // eslint-disable-next-line no-console
  console.log('API Error:', error);

  const key = (error.name || error.message || '').toLowerCase();

  if (key.includes('password')) {
    return passwordErrorsHandler(error);
  }

  if (key.includes('token')) {
    return tokenErrorsHandler(error);
  }

  if (key.includes('sequelize')) {
    return sequelizeErrorsHandler(error);
  }

  if (key.includes('admindestroy')) {
    throw new HttpError(
      error.status,
      'Não é possível deletar um administrador'
    );
  }

  switch (error.status) {
    // Bad Request
    case 400:
      throw new HttpError(
        400,
        `Erro na requisição - ${error.message || error.name}`
      );
    // Unauthorized
    case 401:
      throw new HttpError(
        401,
        'Seu usuário não foi reconhecido ou seu login expirou.'
      );
    // Forbidden
    case 403:
      throw new HttpError(
        403,
        'Seu usuário não tem as permissões necessárias para acessar esse recurso.'
      );
    // Not Found
    case 404:
      throw new HttpError(404, 'O servidor não encontrou esse recurso.');
    // Method Not Allowed
    case 405:
      throw new HttpError(405, 'Esse recurso não foi implementado.');
    // Request Timeout
    case 408:
      throw new HttpError(408, 'Conexão ociosa com o servidor');
    default:
      throw new HttpError(
        error.status,
        `Erro na requisição - ${error.message || error.name}`
      );
  }
};
