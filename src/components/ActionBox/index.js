import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Box } from './styles';

function ActionBox({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Box visible={String(visible)}>
      <MdMoreHoriz size={16} color="#C6C6C6" onClick={handleToggleVisible} />
      {children}
    </Box>
  );
}

ActionBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ActionBox;
