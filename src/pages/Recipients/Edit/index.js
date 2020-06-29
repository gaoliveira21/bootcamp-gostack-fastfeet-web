import React from 'react';
import { Form } from '@rocketseat/unform';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import FormHeader from '~/components/FormHeader';
import FormPartial from '../_partials/Form';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  street: yup.string().required('Rua é um campo obrigatório'),
  number: yup.string().required('Número é um campo obrigatório'),
  city: yup.string().required('Cidade é um campo obrigatório'),
  state: yup.string().required('Estado é um campo obrigatório'),
  cep: yup.string().required('CEP é um campo obrigatório'),
});

function Edit({ location }) {
  const formData = location.state;

  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    cep,
  }) {
    try {
      console.tron.log(formData);
      await api.put(`/recipients/${formData.id}`, {
        name,
        street,
        number,
        complement,
        city,
        state,
        cep,
      });

      history.push('/recipients');
    } catch (error) {
      toast.error('Falha ao atualizar destinatario, tente novamente');
    }
  }

  return (
    <Container>
      <Form initialData={formData} schema={schema} onSubmit={handleSubmit}>
        <FormHeader title="Edição de encomendas" />
        <FormPartial />
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.string,
      complement: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      cep: PropTypes.string,
    }),
  }).isRequired,
};

export default Edit;
