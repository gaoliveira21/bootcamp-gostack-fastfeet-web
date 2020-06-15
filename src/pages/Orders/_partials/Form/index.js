import React, { useEffect, useState } from 'react';
import { Input, Select } from '@rocketseat/unform';

import api from '~/services/api';

import { FormBox } from './styles';

function FormPartial() {
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

  return (
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
  );
}

export default FormPartial;
