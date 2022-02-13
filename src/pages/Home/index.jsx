import React from 'react';
import { Link } from 'react-router-dom';

// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function index() {
  return (
    <Container>
      {/* <Modal danger /> */}
      {/* <Loader /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="info-name-and-tag">
              <strong>Marcos</strong>
              <small>INSTAGRAM</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Apagar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
