import React from 'react';
import { Form } from '@rocketseat/unform';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

import FormPartial from '../_partials/Form';
import FormHeader from '~/components/FormHeader';

const schema = yup.object().shape({
  recipient_id: yup.string().required('Selecione o entregador'),
  deliveryman_id: yup.string().required('Selecione o destinatário'),
  product: yup.string().required('O produto é obrigatório'),
});

function New() {
  async function handleSubmit(
    { recipient_id, deliveryman_id, product },
    { resetForm }
  ) {
    try {
      await api.post('/orders', {
        recipient_id,
        deliveryman_id,
        product,
      });

      resetForm();
      toast.success('Encomenda cadastrada com sucesso!');
    } catch (error) {
      toast.error('Falha ao cadastrar encomenda, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FormHeader title="Cadastro de encomendas" />
        <FormPartial />
      </Form>
    </Container>
  );
}

export default New;
