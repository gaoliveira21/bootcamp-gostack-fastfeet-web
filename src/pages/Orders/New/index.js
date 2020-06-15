import React from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, FormBox } from './styles';

import FormPartial from '../_partials/Form';

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
        <header>
          <h2>Cadastro de encomendas</h2>
          <div>
            <Link to="/">
              <MdChevronLeft size={16} color="#fff" />
              <span>VOLTAR</span>
            </Link>
            <button type="submit">
              <MdCheck size={16} color="#fff" />
              <span>SALVAR</span>
            </button>
          </div>
        </header>
        <FormPartial />
      </Form>
    </Container>
  );
}

export default New;
