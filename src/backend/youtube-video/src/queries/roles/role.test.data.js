'use strict';

module.exports = [
  {
    model: 'role',
    data: [
      {
        id: 1,
        name: 'test',
        description: 'TESTE',
      },
      {
        id: 2,
        name: 'engineer',
        description: 'ENGENHEIRO',
      },
      {
        id: 3,
        name: 'admin',
        description: 'ADMINISTRADOR',
      },
      {
        id: 4,
        name: 'disabled',
        description: 'DESABILITADO',
        is_active: false,
      },
    ],
  },
];
