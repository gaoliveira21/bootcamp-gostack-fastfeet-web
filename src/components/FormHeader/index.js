import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

import history from '~/services/history';

function FormHeader({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <button type="button" onClick={() => history.goBack()}>
          <MdChevronLeft size={16} color="#fff" />
          <span>VOLTAR</span>
        </button>
        <button type="submit">
          <MdCheck size={16} color="#fff" />
          <span>SALVAR</span>
        </button>
      </div>
    </Container>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormHeader;
