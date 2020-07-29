import React, { useEffect, useState } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async function loadDeliverymen() {
      const response = await api.get('/deliverymen', {
        params: {
          page: currentPage + 1,
          limit: 10,
        },
      });

      const { totalPages: totalPg } = response.data;

      setTotalPages(totalPg);
      setDeliverymen(response.data.deliverymen);
    })();
  }, [currentPage]);

  function handleNavigateToEdit({ id, name, email, avatar }) {
    history.push('/deliverymen/edit', {
      id,
      name,
      email,
      avatar,
    });
  }

  async function handleRemoveDeliveryman(deliveryman_id) {
    try {
      if (window.confirm('Deseja excluir o entregador?')) {
        await api.delete(`/deliverymen/${deliveryman_id}`);
        setDeliverymen(
          deliverymen.filter((deliveryman) => deliveryman.id !== deliveryman_id)
        );
        toast.success('Entregador excluido com sucesso!');
      }
    } catch (error) {
      toast.error('Falha ao excluir entregador, tente novamente');
    }
  }

  return (
    <>
      <ContainerHeader
        title="Gerenciando entregadores"
        link="/deliverymen/new"
      />
      <Table>
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymen.map((deliveryman) => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>
                  <div>
                    <img
                      src={
                        deliveryman.avatar
                          ? deliveryman.avatar.url
                          : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                      }
                      alt={deliveryman.name}
                    />
                  </div>
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <ActionBox>
                    <ul>
                      <li onClick={() => handleNavigateToEdit(deliveryman)}>
                        <MdModeEdit color="#4D85EE" />
                        <span>Editar</span>
                      </li>
                      <li
                        onClick={() => handleRemoveDeliveryman(deliveryman.id)}
                      >
                        <MdDeleteForever color="#DE3B3B" />
                        <span>Excluir</span>
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
  );
}

export default Deliverymen;
