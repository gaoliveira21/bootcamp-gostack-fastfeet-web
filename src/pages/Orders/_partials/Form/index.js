import React, { useEffect, useState } from 'react';
import { Input, Select } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { FormBox } from './styles';

function FormPartial({ data }) {
  const [deliverymen, setDeliverymen] = useState([]);
  const [recipients, setRecipients] = useState([]);

  const [selectedRecipient, setSelectedRecipient] = useState(
    data.recipient_id || ''
  );
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(
    data.deliveryman_id || ''
  );
  const [product, setProduct] = useState(data.product || '');

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
            value={selectedRecipient}
            onChange={(event) => setSelectedRecipient(event.target.value)}
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
            value={selectedDeliveryman}
            onChange={(event) => setSelectedDeliveryman(event.target.value)}
            placeholder="Selecione o entregador"
            options={deliverymen}
          />
        </div>
      </div>

      <label htmlFor="product">Nome do produto</label>
      <Input
        name="product"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
        id="product"
        type="text"
      />
    </FormBox>
  );
}

FormPartial.propTypes = {
  data: PropTypes.shape({
    recipient_id: PropTypes.number,
    deliveryman_id: PropTypes.number,
    product: PropTypes.string,
  }),
};

FormPartial.defaultProps = {
  data: {},
};

export default FormPartial;
