import React from 'react';

import { Container } from 'reactstrap';
import { usePromiseTracker } from 'react-promise-tracker';

import Animation from './Animation';

const AwaitingPromise = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <Container
        fluid
        className="vh-100 d-flex flex-column no-gutters p-0 flex-fill overflow-auto justify-content-center align-items-center"
      >
        <Animation />
      </Container>
    )
  );
};

export default AwaitingPromise;
