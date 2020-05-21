import React from 'react';
import PropTypes from 'prop-types';

import { Container, Close } from './styles';

function Dialog({ visible, close, render, data }) {
  return (
    <>
      <Close onClick={close} />
      <Container visible={visible}>
        <div>{render(data)}</div>
      </Container>
    </>
  );
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  close: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  data: PropTypes.shape,
};

Dialog.defaultProps = {
  visible: false,
  data: {},
};

export default Dialog;
