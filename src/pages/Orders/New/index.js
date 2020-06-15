import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, FormBox } from './styles';

const schema = yup.object().shape({
  recipient_id: yup.string().required('Selecione o entregador'),
  deliveryman_id: yup.string().required('Selecione o destinatário'),
  product: yup.string().required('O produto é obrigatório'),
});

function New() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    (async function loadSelectsData() {
      const [recipientsRes, deliverymenRes] = await Promise.all([
        api.get('/recipients'),
        api.get('/deliverymen'),
      ]);

      const recipientsData = recipientsRes.data.map(
        ({ id, name, street, number, city, state }) => ({
          id,
          title: `${name} - ${street}, ${number} - ${city}/${state}`,
        })
      );

      const deliverymenData = deliverymenRes.data.map(({ id, name }) => ({
        id,
        title: name,
      }));

      setDeliverymen(deliverymenData);
      setRecipients(recipientsData);
    })();
  }, []);

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
        <FormBox>
          <div>
            <div>
              <label htmlFor="recipient">Destinatário</label>
              <Select
                id="recipient"
                name="recipient_id"
                placeholder="Selecione o destinatário"
                options={recipients}
              />
            </div>
            <div>
              <label htmlFor="deliveryman">Entregador</label>
              <Select
                id="deliveryman"
                name="deliveryman_id"
                placeholder="Selecione o entregador"
                options={deliverymen}
              />
            </div>
          </div>

          <label htmlFor="product">Nome do produto</label>
          <Input name="product" id="product" type="text" />
        </FormBox>
      </Form>
    </Container>
  );
}

export default New;
