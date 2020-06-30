import React, { useEffect, useState } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';

function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    (async function loadDeliverymen() {
      const response = await api.get('/deliverymen');

      setDeliverymen(response.data);
    })();
  }, []);

  function handleNavigateToEdit({ name, email, avatar }) {
    history.push('/deliverymen/edit', {
      name,
      email,
      avatar,
    });
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
                      <li>
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
    </>
  );
}

export default Deliverymen;
