import React, { useEffect, useState } from 'react';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';
import Table from '~/components/Table';
import ActionBox from '~/components/ActionBox';

function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    (async function loadProblems() {
      const response = await api.get('/delivery/problems');

      setProblems(response.data);
    })();
  }, []);

  return (
    <>
      <Container title="Problemas na encomenda">
        <h2>Problemas na encomenda</h2>
      </Container>
      <Table>
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td>#{problem.order.id}</td>
                <td>{problem.description}</td>
                <td>
                  <ActionBox>
                    <ul>
                      <li>
                        <MdRemoveRedEye color="#7159c1" />{' '}
                        <span>Visualizar</span>
                      </li>
                      <li>
                        <MdDeleteForever color="#DE3B3B" />{' '}
                        <span>Cancelar encomenda</span>
                      </li>
                    </ul>
                  </ActionBox>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      </Table>
    </>
  );
}

export default Problems;
