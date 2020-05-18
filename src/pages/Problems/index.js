import React, { useEffect, useState } from 'react';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';
import Table from '~/components/Table';
import ActionBox from '~/components/ActionBox';

function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    (async function loadProblems() {})();
  }, []);

  return (
    <>
      <Container title="Problemas na encomenda">
        <h2>Problemas na encomenda</h2>
      </Container>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Problema.....</td>
            <td>
              <ActionBox>
                <ul>
                  <li>
                    <MdRemoveRedEye color="#7159c1" /> <span>Visualizar</span>
                  </li>
                  <li>
                    <MdDeleteForever color="#DE3B3B" />{' '}
                    <span>Cancelar encomenda</span>
                  </li>
                </ul>
              </ActionBox>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Problems;
