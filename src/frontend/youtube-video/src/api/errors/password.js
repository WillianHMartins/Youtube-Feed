import { HttpError } from 'found';

class PasswordUpdateError extends HttpError {
  constructor(status, data, user) {
    super(status, data || 'PasswordUpdateError');
    this.user = user;
  }
}

export default error => {
  const { name, message = '' } = error;
  const key = name || message;

  switch (key) {
    case 'FirstLoginPasswordUpdateError':
      throw new PasswordUpdateError(
        error.status,
        'Sua senha expirou, você deve atualizar a senha para acessar o sistema',
        error.user
      );
    case 'LastPasswordUpdateError':
      throw new PasswordUpdateError(
        error.status,
        'Sua senha expirou, você deve atualizar a senha para acessar o sistema',
        error.user
      );

    case 'ValidateCurrentPasswordError':
      throw new HttpError(
        error.status,
        'Não foi possível validar a senha atual'
      );

    case 'PasswordHasTeamError':
      throw new HttpError(
        error.status,
        'A senha não pode conter o nome de uma equipe'
      );
    case 'PasswordHasUserError':
      throw new HttpError(
        error.status,
        'A senha não pode conter o nome de um usuário'
      );
    case 'PasswordHasRegexError':
      throw new HttpError(
        error.status,
        'A senha deve ter 7 caracteres e ter pelo menos três desses tipos: ' +
          'Letras maiúsculas, letras minúsculas, numerais, caracteres não alfanuméricos ; : * % & !'
      );
    case 'PasswordHasAlreadyBeenUsedRecently':
      throw new HttpError(error.status, 'A senha foi utilizada recentemente');

    default:
      throw new HttpError(
        error.status,
        `Erro relacionado a senha - ${name} ${message}`
      );
  }
};
