import React, { useState } from 'react';

import {
  Card as BCard,
  CardImg,
  CardBody,
  CardTitle,
  Badge,
  Col,
  Row,
  FormGroup,
  Label,
  Button,
  Input,
  Modal,
  ModalFooter,
  ModalBody,
} from 'reactstrap';
import { Text, Flex } from 'rebass';

import styled from 'styled-components';

const Card = styled(BCard)`
  height: 280px;
  margin: 5px 0px;
`;

const Rewards = ({ rewards, profile }) => {
  const [list, setList] = useState(() => rewards);
  const [modal, setModal] = useState(() => false);
  const [currentReward, setReward] = useState(() => null);

  const toggle = () => setModal(!modal);

  const validateReward = (reward) => {
    setReward(reward)
    setModal(true)
  }

  const filterByMe = () => {
    return rewards.filter((rewards) => rewards.owner === profile.id);
  };

  const filterNotMe = () => {
    return rewards.filter((rewards) => rewards.owner !== profile.id);
  };

  const filter = (value) => {
    const cases = {
      me: () => setList(filterByMe()),
      all: () => setList(rewards),
      notme: () => setList(filterNotMe()),
    };
    return cases[value]();
  };

  const updateList = (id) => {
    const newList = []

    for(let reward of rewards) {
      if(reward.id === id)
        reward.owner = profile.id
      newList.push(reward)  
  }

    profile.rewards.push(id)

    setList(newList)
    setModal(false)
  }

  return (
    <>
      <Flex my='10px;' justifyContent='space-between'>
        <Text fontSize='50px'>Recompensas</Text>
        <FormGroup>
          <Label for='filter'>Filtrar</Label>
          <Input
            type='select'
            name='select'
            id='filter'
            data-testid="filter"
            onChange={({ target: { value } }) => filter(value)}
          >
            <option value='all'>Todas as recompensas</option>
            <option value='me'>Minhas recompensas</option>
            <option value='notme'>Não tenho ainda</option>
          </Input>
        </FormGroup>
      </Flex>
      <Row>
        {list.length > 0 ? (
          list.map((reward) => (
            <Col sm='3' key={reward.id}>
              <Card>
                <CardImg top width='100%' src={reward.image} alt={reward.name} />
                <CardBody>
                  <CardTitle>{reward.name}</CardTitle>
                  {reward.owner !== profile.id ? (
                    <>
                      <Badge color='danger'>Não conquistada</Badge>
                      <Button size='sm' color='warning' onClick={() => validateReward(reward)}>
                        Conquistar
                      </Button>
                    </>
                  ) : (
                    <Badge color='success'>Conquistada</Badge>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <p>Houve algum problema na conquista da recompensa</p>
        )}
      </Row>
      {/* Validate reward */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <FormGroup>
            <Label for='code'>Insira o código da recompensa de {currentReward?.name}:</Label>
            <Input
              type='number'
              name='rewardcode'
              id='code'
              placeholder='Ex: 785421'
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button color='success' onClick={() => updateList(currentReward?.id)}>
            Validar
          </Button>
          <Button color='secondary' onClick={toggle}>
            Voltar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Rewards;
