import React from 'react';
import { object } from 'prop-types';

import { Button, Col, Row } from 'reactstrap';

import Main from '../App/Main';
import Logo from '../../components/Logo';

const RenderError = ({ props: { error = {} } }) => (
  <Main>
    <Logo />
    <Row>
      <Col className="mt-4 text-center">
        <h5 className="mb-2">Ocorreu um erro ao carregar a página</h5>
        <p>{error.message || error.data}</p>
        {error.status === 401 && (
          <Button
            color="primary"
            onClick={() => window.location.replace('/login')}
          >
            Refazer login
          </Button>
        )}
      </Col>
    </Row>
  </Main>
);

RenderError.defaultProps = {
  props: {},
};

RenderError.propTypes = {
  props: object,
};

export default RenderError;
