import React from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Dialog({ visible, close }) {
  return (
    <Container visible={visible}>
      <div>
        <MdClose size={18} color="#999" onClick={close} />
        <p>Texto</p>
      </div>
    </Container>
  );
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  visible: false,
};

export default Dialog;
