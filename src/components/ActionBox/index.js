import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Box } from './styles';

function ActionBox() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Box visible={String(visible)}>
      <MdMoreHoriz size={16} color="#C6C6C6" onClick={handleToggleVisible} />
      <ul>
        <li>
          <MdRemoveRedEye color="#7159c1" /> <span>Visualizar</span>
        </li>
        <li>
          <MdModeEdit color="#4D85EE" /> <span>Editar</span>
        </li>
        <li>
          <MdDeleteForever color="#DE3B3B" /> <span>Excluir</span>
        </li>
      </ul>
    </Box>
  );
}

export default ActionBox;
