import React from 'react';

import { Col, Row } from 'reactstrap';

import ahgora from '../../images/logo-ahgora.png';
import youtube from '../../images/logo-youtube.png';

const Logo = () => (
  <Row>
    <Col>
      <div className="text-center">
        <img src={ahgora} alt="AHGORA" height="25" />
        <img className="pl-4" src={youtube} alt="YOUTUBE" height="40" />
      </div>
      <h4 className="mb-2 text-center">Video Feed Manager</h4>
    </Col>
  </Row>
);

export default Logo;
