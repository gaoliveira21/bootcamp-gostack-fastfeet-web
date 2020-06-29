import React from 'react';
import { Form } from '@rocketseat/unform';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import FormHeader from '~/components/FormHeader';
import FormPartial from '../_partials/Form';

import api from '~/services/api';

import { Container } from './styles';

const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  street: yup.string().required('Rua é um campo obrigatório'),
  number: yup.string().required('Número é um campo obrigatório'),
  city: yup.string().required('Cidade é um campo obrigatório'),
  state: yup.string().required('Estado é um campo obrigatório'),
  cep: yup.string().required('CEP é um campo obrigatório'),
});

function New() {
  async function handleSubmit(
    { name, street, number, complement, city, state, cep },
    { resetForm }
  ) {
    try {
      await api.post('/recipients', {
        name,
        street,
        number,
        complement,
        city,
        state,
        cep,
      });

      resetForm();
      toast.success('Destinatario cadastrado com sucesso!');
    } catch (error) {
      toast.error('Falha ao cadastrar o destinatario, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FormHeader title="Cadastro de destinátarios" />
        <FormPartial />
      </Form>
    </Container>
  );
}

export default New;
