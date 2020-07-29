import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function AlertBar({ content }) {
  return <Container>{content}</Container>;
}

AlertBar.propTypes = {
  content: PropTypes.string.isRequired,
};

export default AlertBar;
