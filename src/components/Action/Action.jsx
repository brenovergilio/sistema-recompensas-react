import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalFooter
} from 'reactstrap';
import { Text } from 'rebass';
import styled from 'styled-components';

const CardContent = styled.div`
  background: #fafafa;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  flex-direction: column;
`;

const Trophy = styled.img`
  height: 400px;
  position: fixed;
  z-index: 9;
  left: 40%;
  width: auto;
`;

const Action = ({ rewards }) => {
  const [modal, setModal] = useState(() => false);
  const [show, setShow] = useState(() => false);

  const toggle = () => setModal(() => !modal);

  const claim = () => {
    !!(rewards?.length === 7) ? setShow(true) : setModal(true);
  };

  return (
    <>
      {show && (
        <Trophy data-testid="trophy" src='https://image.freepik.com/free-vector/gold-trophy-icon-golden-goblet-with-star-reward-icon-white-isolated_138676-497.jpg' />
      )}
      <CardContent data-testid="card-trophy">
        <Text fontSize='32px'>Reivindicar troféu</Text>
        <Button color='warning' onClick={claim} data-testid="claim-button">
          Reinvindicar
        </Button>
      </CardContent>
      <Modal isOpen={modal} toggle={toggle}>
        <Text data-testid="modaltext">Você não tem todas as recompensas para reinvindicar o troféu</Text>
        <ModalFooter>
          <Button color='secondary' data-testid="back" onClick={toggle}>
            Voltar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Action;
