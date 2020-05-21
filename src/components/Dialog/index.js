import React from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Dialog({ visible, close, render, data }) {
  return (
    <Container visible={visible}>
      <div>
        <MdClose size={18} color="#999" onClick={close} />
        {render(data)}
      </div>
    </Container>
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
