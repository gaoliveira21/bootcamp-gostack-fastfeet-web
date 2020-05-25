import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Container } from './styles';

function FormContainer() {
  return (
    <Container>
      <header>
        <h2>Cadastro de encomendas</h2>
        <div>
          <Link to="/orders">
            <MdChevronLeft size={16} color="#fff" />
            <span>VOLTAR</span>
          </Link>
          <button type="button">
            <MdCheck size={16} color="#fff" />
            <span>SALVAR</span>
          </button>
        </div>
      </header>
    </Container>
  );
}

export default FormContainer;
