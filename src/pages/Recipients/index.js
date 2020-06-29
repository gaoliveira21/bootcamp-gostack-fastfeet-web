import React, { useEffect, useState } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import ContainerHeader from '~/components/ContainerHeader';
import Table from '~/components/Table';
import ActionBox from '~/components/ActionBox';

function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    (async function loadRecipients() {
      const response = await api.get('/recipients');

      setRecipients(response.data);
    })();
  }, []);

  function handleNavigateToEdit({
    id,
    name,
    street,
    number,
    complement,
    city,
    state,
    cep,
  }) {
    history.push('/recipients/edit', {
      id,
      name,
      street,
      number,
      complement,
      city,
      state,
      cep,
    });
  }

  return (
    <>
      <ContainerHeader
        title="Gerenciando destinatários"
        link="/recipients/new"
      />
      <Table>
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map((recipient) => (
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>{`${recipient.street}, ${recipient.number}, ${recipient.city}, ${recipient.state}`}</td>
                <td>
                  <ActionBox>
                    <ul>
                      <li onClick={() => handleNavigateToEdit(recipient)}>
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

export default Recipients;
