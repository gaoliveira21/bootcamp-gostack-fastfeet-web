import React from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import FormHeader from '~/components/FormHeader';
import FormPartial from '../_partials/Form';

import { Container } from './styles';

const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .required('Email é um campo obrigatório')
    .email('O valor inserido não é um email válido'),
});

function New() {
  async function handleSubmit({ name, email, avatar_id }) {
    try {
      await api.post('/deliverymen', {
        name,
        email,
        avatar_id,
      });

      history.push('/deliverymen');
    } catch (error) {
      toast.error('Falha ao cadastrar entregador, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FormHeader title="Cadastro de entregadores" />
        <FormPartial />
      </Form>
    </Container>
  );
}

export default New;
