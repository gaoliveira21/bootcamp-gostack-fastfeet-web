import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import FormHeader from '~/components/FormHeader';
import FormPartial from '~/pages/Deliverymen/_partials/Form';

const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .required('Email é um campo obrigatório')
    .email('O valor inserido não é um email válido'),
});

function Edit({ location }) {
  const initialData = location.state;
  const [avatarId, setAvatarId] = useState(initialData.avatar.id);

  async function handleSubmit({ name, email }) {
    try {
      await api.put(`/deliverymen/${initialData.id}`, {
        name,
        email,
        avatar_id: avatarId,
      });
      history.push('/deliverymen');
    } catch (error) {
      toast.error('Falha ao atualizar entregador, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <FormHeader title="Edição de entregadores" />
        <FormPartial avatarId={setAvatarId} />
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Edit;
