import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import { Badge } from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function loadOrders() {
      const response = await api.get('/orders');

      const data = response.data.map((order) => {
        if (order.canceled_at)
          return {
            ...order,
            status: {
              text: 'CANCELADA',
              fontColor: '#DE3B3B',
              backgroundColor: '#FAB0B0',
            },
          };

        if (order.end_date)
          return {
            ...order,
            status: {
              text: 'ENTREGUE',
              fontColor: '#2CA42B',
              backgroundColor: '#DFF0DF',
            },
          };

        if (order.start_date)
          return {
            ...order,
            status: {
              text: 'RETIRADA',
              fontColor: '#4D85EE',
              backgroundColor: '#BAD2FF',
            },
          };

        return {
          ...order,
          status: {
            text: 'PENDENTE',
            fontColor: '#C1BC35',
            backgroundColor: '#F0F0DF',
          },
        };
      });

      setOrders(data);
      console.tron.log(data);
    })();
  }, []);

  return (
    <>
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
            <tr>
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
                <Badge {...order.status}>
                  <div />
                  <span>{order.status.text}</span>
                </Badge>
              </td>
              <td>
                <ActionBox>
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
