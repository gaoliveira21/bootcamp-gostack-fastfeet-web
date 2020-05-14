import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';

function ContainerHeader() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
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

export default ContainerHeader;
