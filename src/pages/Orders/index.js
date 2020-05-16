import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import ContainerHeader from '~/components/ContainerHeader';
import { OrdersTable, Badge } from './styles';

function Orders() {
  return (
    <>
      <ContainerHeader title="Gerenciando encomendas" />
      <OrdersTable>
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
          <tr>
            <td>#01</td>
            <td>Gabriel José</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt="John Doe"
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>Barra Bonita</td>
            <td>São Paulo</td>
            <td>
              <Badge>
                <div />
                <span>ENTREGUE</span>
              </Badge>
            </td>
            <td>
              <MdMoreHoriz size={16} color="#C6C6C6" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Gabriel José</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt="John Doe"
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>Barra Bonita</td>
            <td>São Paulo</td>
            <td>
              <Badge>
                <div />
                <span>ENTREGUE</span>
              </Badge>
            </td>
            <td>
              <MdMoreHoriz size={16} color="#C6C6C6" />
            </td>
          </tr>
        </tbody>
      </OrdersTable>
    </>
  );
}

export default Orders;
