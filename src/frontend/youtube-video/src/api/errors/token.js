import { HttpError } from 'found';

export default error => {
  const { name, message = '' } = error;
  const key = name || message;

  if (key === 'UserTokenCreateError')
    throw new HttpError(error.status, 'Usuário ou senha inválidos');

  if (key === 'UserTokenCreateRoleError')
    throw new HttpError(
      error.status,
      'O Perfil de usuário associado ao seu usuário foi desabilitado,' +
        ' entre em contato com o administrador'
    );

  throw new HttpError(
    error.status,
    `Erro relacionado a autenticação - ${name} ${message}`
  );
};
