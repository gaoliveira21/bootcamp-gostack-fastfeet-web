import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, FormBox } from './styles';

function FormContainer({ children }) {
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
      <FormBox>{children}</FormBox>
    </Container>
  );
}

FormContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormContainer;
