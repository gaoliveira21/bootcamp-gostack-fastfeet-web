import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ContainerHeader({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <MdSearch color="#999999" size={20} />
        </div>
        <button type="button">
          <MdAdd color="#fff" size={16} />
          CADASTRAR
        </button>
      </div>
    </Container>
  );
}

ContainerHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContainerHeader;
