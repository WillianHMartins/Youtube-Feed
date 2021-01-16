import * as Yup from 'yup';
import { formatDateHour } from './formatDate';

Yup.setLocale({
  array: {
    max: ({ max }) => `Deve ter no máximo ${max} itens`,
    min: ({ min }) => `Deve ter no mínimo ${min} itens`,
  },
  date: {
    max: ({ max }) => `Deve ser menor do que ${formatDateHour(max)}`,
    min: ({ min }) => `Deve ser maior do que ${formatDateHour(min)}`,
  },
  mixed: {
    default: 'É inválido',
    notOneOf: ({ values }) =>
      `Não pode ser um dos seguintes valores: ${values}`,
    notType: 'É um campo obrigatório',
    oneOf: ({ values }) => `Deve ser um dos seguintes valores: ${values}`,
    required: 'É um campo obrigatório',
  },
  number: {
    integer: 'Deve ser um número inteiro',
    lessThan: ({ less }) => `Deve ser menor que ${less}`,
    max: ({ max }) => `Deve ser no máximo ${max}`,
    min: ({ min }) => `Deve ser no mínimo ${min}`,
    moreThan: ({ more }) => `Deve ser maior que ${more}`,
    negative: 'Deve ser um número negativo',
    notEqual: ({ notEqual }) => `Não pode ser igual à ${notEqual}`,
    positive: 'Deve ser um número posítivo',
  },
  object: {},
  string: {
    email: 'Tem o formato de e-mail inválido',
    length: ({ length }) => `Deve ter exatamente ${length} caracteres`,
    lowercase: 'Deve estar em maiúsculo',
    max: ({ max }) => `Deve ter no máximo ${max} caracteres`,
    min: ({ min }) => `Deve ter pelo menos ${min} caracteres`,
    trim: 'Não deve conter espaços no início ou no fim.',
    uppercase: 'Deve estar em minúsculo',
    url: 'Deve ter um formato de URL válida',
  },
});

export default Yup;
