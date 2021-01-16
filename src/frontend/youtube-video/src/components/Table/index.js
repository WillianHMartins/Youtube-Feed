import React from 'react';
import { arrayOf, bool, string, shape, object } from 'prop-types';

import { Col, Row } from 'reactstrap';
import DataTable from 'react-data-table-component';

const Table = ({ columns, data, noDataComponent, title, ...props }) => (
  <Row className="mt-4">
    <Col>
      {title && <h4>{title}</h4>}
      <DataTable
        noHeader
        columns={columns}
        data={data}
        pagination
        striped
        paginationPerPage={15}
        paginationRowsPerPageOptions={[15, 30, 50, 100]}
        noDataComponent={noDataComponent}
        {...props}
      />
    </Col>
  </Row>
);

Table.defaultProps = {
  noDataComponent: 'Não há registros para serem exibidos',
  title: undefined,
};

Table.propTypes = {
  data: arrayOf(object).isRequired,
  columns: arrayOf(
    shape({
      name: string.isRequired,
      selector: string.isRequired,
      sortable: bool.isRequired,
    }).isRequired
  ).isRequired,

  noDataComponent: string,
  title: string,
};

export default Table;
