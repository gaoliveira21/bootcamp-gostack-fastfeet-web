import React from 'react';
import { Form, Select, Input } from '@rocketseat/unform';

// import { Container } from './styles';

import FormContainer from '~/components/FormContainer';

function New() {
  return (
    <FormContainer>
      <Form>
        <div>
          <div>
            <label htmlFor="recipient">Destinatário</label>
            <Select
              id="recipient"
              name="recipient"
              options={[{ id: 1, title: 'Teste' }]}
            />
          </div>
          <div>
            <label htmlFor="deliveryman">Destinatário</label>
            <Select
              id="deliveryman"
              name="deliveryman"
              options={[{ id: 1, title: 'Teste' }]}
            />
          </div>
        </div>

        <label htmlFor="product">Nome do produto</label>
        <Input name="product" id="product" type="text" />
      </Form>
    </FormContainer>
  );
}

export default New;
