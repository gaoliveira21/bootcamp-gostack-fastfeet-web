import React, { useEffect, useState } from 'react';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

import Dialog from '~/components/Dialog';
import Table from '~/components/Table';
import ActionBox from '~/components/ActionBox';
import Pagination from '~/components/Pagination';
import AlertBar from '~/components/AlertBar';

function Problems() {
  const [problems, setProblems] = useState([]);
  const [dialog, setDialog] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async function loadProblems() {
      const response = await api.get('/delivery/problems', {
        params: {
          page: currentPage + 1,
          limit: 10,
        },
      });

      const { totalPages: totalPg } = response.data;

      setTotalPages(totalPg);
      setProblems(response.data.problems);
    })();
  }, [currentPage]);

  function handleShowDialog(id) {
    const problem = problems.filter((p) => p.id === id);

    function handleDialogClose() {
      setDialog(null);
    }

    setDialog(
      <Dialog
        data={problem[0]}
        close={handleDialogClose}
        render={(data) => (
          <>
            <strong>Visualizar problema</strong>
            <p>{data.description}</p>
          </>
        )}
      />
    );
  }

  async function handleCancelDelivery(problem_id) {
    try {
      if (window.confirm('Deseja realmente cancelar essa encomenda?')) {
        await api.delete(`/problem/${problem_id}/cancel-delivery`);
        toast.success('Encomenda cancelada com sucesso!');
      }
    } catch (error) {
      toast.error('Falha ao cancelar encomenda, tente novamente.');
    }
  }

  return (
    <>
      {dialog}
      <Container title="Problemas na encomenda">
        <h2>Problemas na encomenda</h2>
      </Container>
      {problems.length > 0 ? (
        <>
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
                          <li onClick={() => handleShowDialog(problem.id)}>
                            <MdRemoveRedEye color="#7159c1" />{' '}
                            <span>Visualizar</span>
                          </li>
                          <li onClick={() => handleCancelDelivery(problem.id)}>
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
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <AlertBar content="Nenhum registro encontrado" />
      )}
    </>
  );
}

export default Problems;
