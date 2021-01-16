import React, { useState } from 'react';
import { arrayOf, bool, func, string, shape, object } from 'prop-types';

import { Button } from 'reactstrap';

import AsyncRemove from './AsyncRemove';
import Table from '../Table';

// for indexed DataManagerTable by row
export const saveIndexedRow = (list, values) => {
  const { row, ...rest } = values;
  if (list.find(item => item.row === row)) {
    // UPDATE
    return list.map(item => (item.row === row ? rest : item));
  }
  // CREATE
  return [...list, rest];
};

// for indexed DataManagerTable by row
export const mapRowIndex = list =>
  list.map((item, index) => ({
    row: index,
    ...item,
  }));

// for indexed DataManagerTable by row
export const destroyIndexedRow = (list, data) =>
  list.reduce((newList, item) => {
    const { row, ...rest } = item;
    if (row !== data.row) {
      newList.push(rest);
    }
    return newList;
  }, []);

const DataManagerTable = ({
  columns,
  data,
  noDataComponent,
  confirmOnDelete,
  title,

  onDestroy,
  onDestroySuccess,
  onDestroyError,
  onUpdate,
  ...props
}) => {
  const [register, setRegisterToDestroy] = useState(undefined);

  return (
    <>
      {confirmOnDelete && (
        <AsyncRemove
          onDestroy={() => onDestroy(register)}
          onDestroyCancel={() => setRegisterToDestroy(undefined)}
          onDestroyError={response => {
            setRegisterToDestroy(undefined);
            onDestroyError(response);
          }}
          onDestroySuccess={response => {
            setRegisterToDestroy(undefined);
            onDestroySuccess(response);
          }}
          open={!!register}
        />
      )}
      <Table
        data={data}
        columns={columns.concat({
          cell: row => (
            <>
              {onDestroy && (
                <Button
                  outline
                  className="mr-2"
                  onClick={() => {
                    if (confirmOnDelete) {
                      setRegisterToDestroy(row);
                    } else {
                      onDestroy(row);
                    }
                  }}
                  color="secondary"
                >
                  Remover
                </Button>
              )}
              {onUpdate && (
                <Button onClick={() => onUpdate(row)} color="primary">
                  Editar
                </Button>
              )}
            </>
          ),
          name: '',
          right: true,
          selector: '',
          sortable: false,
        })}
        noDataComponent={noDataComponent}
        title={title}
        {...props}
      />
    </>
  );
};

DataManagerTable.defaultProps = {
  confirmOnDelete: true,
  noDataComponent: 'Não há registros para serem exibidos',
  title: undefined,

  onDestroy: undefined,
  onDestroyError: () => {},
  onDestroySuccess: () => {},
  onUpdate: undefined,
};

DataManagerTable.propTypes = {
  data: arrayOf(object).isRequired,
  columns: arrayOf(
    shape({
      name: string.isRequired,
      selector: string.isRequired,
      sortable: bool.isRequired,
    }).isRequired
  ).isRequired,

  confirmOnDelete: bool,
  noDataComponent: string,
  title: string,

  onDestroy: func,
  onDestroyError: func,
  onDestroySuccess: func,
  onUpdate: func,
};

export default DataManagerTable;
