import React from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import ActionBox from '~/components/ActionBox';
import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import { Badge } from './styles';

function Orders() {
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
        </tbody>
      </Table>
    </>
  );
}

export default Orders;
