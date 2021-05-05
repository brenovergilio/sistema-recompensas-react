import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Rewards from '../components/Rewards/Rewards';
import Action from '../components/Action/Action';

import profile from '../mocks/profile.json';
import recompensas from '../mocks/recompensas.json';

const profileRewards = profile.profile 
const allRewards = recompensas

const Manager = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Action rewards={profileRewards.rewards}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Rewards rewards={allRewards.rewards} profile={profileRewards}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Manager;
