import React from 'react';
import { Form } from '@rocketseat/unform';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import FormHeader from '~/components/FormHeader';
import FormPartial from '../_partials/Form';

const schema = yup.object().shape({
  recipient_id: yup.string().required('Selecione o entregador'),
  deliveryman_id: yup.string().required('Selecione o destinatário'),
  product: yup.string().required('O produto é obrigatório'),
});

function Edit({ location }) {
  const { recipient_id: recipient } = location.state;
  const { deliveryman_id: deliveryman } = location.state;
  const { product: registredProduct } = location.state;
  const { orderId } = location.state;

  async function handleSubmit({ recipient_id, deliveryman_id, product }) {
    try {
      await api.put(`/orders/${orderId}`, {
        recipient_id,
        deliveryman_id,
        product,
      });

      history.push('/orders');
    } catch (error) {
      toast.error('Falha ao atualizar encomenda, tente novamente');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FormHeader title="Edição de encomendas" />
        <FormPartial
          data={{
            recipient_id: recipient,
            deliveryman_id: deliveryman,
            product: registredProduct,
          }}
        />
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      recipient_id: PropTypes.number,
      deliveryman_id: PropTypes.number,
      product: PropTypes.string,
      orderId: PropTypes.number,
    }),
  }).isRequired,
};

export default Edit;
