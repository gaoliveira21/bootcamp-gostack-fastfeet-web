import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';
import cepMask from '~/utils/cepMask';

import * as StatusTheme from '~/styles/themes/StatusTheme';
import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import Dialog from '~/components/Dialog';
import Pagination from '~/components/Pagination';
import { StatusBadge } from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [dialog, setDialog] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders', {
        params: {
          page: currentPage + 1,
          limit: 10,
        },
      });

      const data = response.data.orders.map((order) => {
        if (order.canceled_at)
          return {
            ...order,
            status: StatusTheme.canceled,
          };

        if (order.end_date)
          return {
            ...order,
            status: StatusTheme.delivered,
            formattedEndDate: format(
              parseISO(order.end_date),
              "dd-MM-yyyy '-' k:m",
              {
                locale: pt,
              }
            ),
          };

        if (order.start_date)
          return {
            ...order,
            status: StatusTheme.withdrawal,
            formattedStartDate: format(
              parseISO(order.start_date),
              "dd-MM-yyyy '-' k:m",
              {
                locale: pt,
              }
            ),
          };

        return {
          ...order,
          status: StatusTheme.pending,
        };
      });

      const { totalPages: totalPg } = response.data;

      setTotalPages(totalPg);
      setOrders(data);
    }
    loadOrders();
  }, [currentPage]);

  function handleShowDialog(id) {
    const order = orders.filter((o) => o.id === id);

    function handleDialogClose() {
      setDialog(null);
    }

    setDialog(
      <Dialog
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
            <span>{cepMask(data.recipient.cep)}</span>
            <hr />
            <strong>Datas</strong>
            <p>
              <strong>Retirada: </strong>
              <span>{data.formattedStartDate}</span>
            </p>
            <p>
              <strong>Entregue: </strong>
              <span>{data.formattedEndDate}</span>
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

  function handleNavigateToEdit({ product, deliveryman, recipient, id }) {
    history.push('/orders/edit', {
      orderId: id,
      product,
      deliveryman_id: deliveryman.id,
      recipient_id: recipient.id,
    });
  }

  async function handleDeleteOrder(id) {
    try {
      if (window.confirm('Deseja realmente excluir esta encomenda?')) {
        await api.delete(`/orders/${id}`);
        setOrders(orders.filter((order) => order.id !== id));
        toast.success('Encomenda removida com sucesso!');
      }
    } catch (error) {
      toast.error('Falha ao excluir encomenda, tente novamente');
    }
  }

  return (
    <>
      {dialog}
      <ContainerHeader title="Gerenciando encomendas" link="/orders/new" />
      <Table>
        <>
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
                        <MdRemoveRedEye color="#7159c1" />{' '}
                        <span>Visualizar</span>
                      </li>
                      <li onClick={() => handleNavigateToEdit(order)}>
                        <MdModeEdit color="#4D85EE" /> <span>Editar</span>
                      </li>
                      <li onClick={() => handleDeleteOrder(order.id)}>
                        <MdDeleteForever color="#DE3B3B" /> <span>Excluir</span>
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

export default Orders;
