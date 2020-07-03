import React from 'react';
import PropTypes from 'prop-types';

import { Container, Close } from './styles';

function Dialog({ close, render, data }) {
  return (
    <>
      <Close onClick={close} />
      <Container>
        <div>{render(data)}</div>
      </Container>
    </>
  );
}

Dialog.propTypes = {
  close: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  data: PropTypes.shape,
};

Dialog.defaultProps = {
  data: {},
};

export default Dialog;
