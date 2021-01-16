import { HttpError } from 'found';

const paths = {
  name: 'Nome',
};

const types = {
  'unique violation': 'deve ser único',
};

const formatMessages = (messages = []) => {
  return messages
    .map(({ path, type }) => `${paths[path] || path} ${types[type] || type}.`)
    .join();
};

export default error => {
  const { name, message = '' } = error;
  const key = name || message;

  if (key === 'SequelizeUniqueConstraintError' || key === 'Validation error')
    throw new HttpError(error.status, formatMessages(error.messages));

  throw new HttpError(
    error.status,
    `Erro relacionado ao banco de dados - ${name} ${message}`
  );
};
