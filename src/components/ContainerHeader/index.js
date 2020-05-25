import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function ContainerHeader({ title, link }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div>
          <input
            type="text"
            placeholder={`Buscar por ${title.split(' ')[1]}`}
          />
          <MdSearch color="#999999" size={20} />
        </div>
        <Link to={link}>
          <MdAdd color="#fff" size={16} />
          CADASTRAR
        </Link>
      </div>
    </Container>
  );
}

ContainerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContainerHeader;
