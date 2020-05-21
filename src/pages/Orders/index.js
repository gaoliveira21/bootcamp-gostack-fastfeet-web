import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import * as StatusTheme from '~/styles/themes/StatusTheme';
import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import Dialog from '~/components/Dialog';
import { StatusBadge } from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    (async function loadOrders() {
      const response = await api.get('/orders');

      const data = response.data.map((order) => {
        if (order.canceled_at)
          return {
            ...order,
            status: StatusTheme.canceled,
          };

        if (order.end_date)
          return {
            ...order,
            status: StatusTheme.delivered,
          };

        if (order.start_date)
          return {
            ...order,
            status: StatusTheme.withdrawal,
          };

        return {
          ...order,
          status: StatusTheme.pending,
        };
      });

      setOrders(data);
    })();
  }, []);

  function handleShowDialog(id) {
    const order = orders.filter((o) => o.id === id);

    function handleDialogClose() {
      setDialog(null);
    }

    setDialog(
      <Dialog
        visible
        data={order[0]}
        close={handleDialogClose}
        render={(data) => (
          <>
            <strong>Informações da encomenda</strong>
            <span>
              {data.recipient.street}, {data.recipient.number}
            </span>
            <span>
              {data.recipient.city} - {data.recipient.state}
            </span>
            <span>{data.recipient.cep}</span>
            <hr />
            <strong>Datas</strong>
            <p>
              <strong>Retirada: </strong>
              <span>{data.start_date}</span>
            </p>
            <p>
              <strong>Entregue: </strong>
              <span>{data.end_date}</span>
            </p>
            <hr />
            <strong>Assinatura do destinatário</strong>
            {data.recipient.signature ? (
              <img src={data.recipient.signature.url} alt="assinatura" />
            ) : null}
          </>
        )}
      />
    );
  }

  return (
    <>
      {dialog}
      <ContainerHeader title="Gerenciando encomendas" />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.recipient.name}</td>
              <td>
                <div>
                  <img
                    src={
                      order.deliveryman.avatar.url ||
                      'https://api.adorable.io/avatars/40/abott@adorable.png'
                    }
                    alt={order.deliveryman.name}
                  />
                  <span>{order.deliveryman.name}</span>
                </div>
              </td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>
                <StatusBadge {...order.status}>
                  <div />
                  <span>{order.status.text}</span>
                </StatusBadge>
              </td>
              <td>
                <ActionBox>
                  <ul>
                    <li onClick={() => handleShowDialog(order.id)}>
                      <MdRemoveRedEye color="#7159c1" /> <span>Visualizar</span>
                    </li>
                    <li>
                      <MdModeEdit color="#4D85EE" /> <span>Editar</span>
                    </li>
                    <li>
                      <MdDeleteForever color="#DE3B3B" /> <span>Excluir</span>
                    </li>
                  </ul>
                </ActionBox>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Orders;
