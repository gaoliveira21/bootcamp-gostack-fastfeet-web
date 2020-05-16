import React from 'react';
import PropTypes from 'prop-types';

import { TableWrapper } from './styles';

function Table({ children }) {
  return <TableWrapper>{children}</TableWrapper>;
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Table;
