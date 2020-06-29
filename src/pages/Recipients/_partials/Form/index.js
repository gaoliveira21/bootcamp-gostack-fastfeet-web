import React from 'react';
import { Input } from '@rocketseat/unform';

import { FormBox } from './styles';

function FormPartial() {
  return (
    <FormBox>
      <div>
        <label htmlFor="name">Nome</label>
        <Input type="text" name="name" id="name" />
      </div>
      <div>
        <div>
          <label htmlFor="street">Rua</label>
          <Input type="text" name="street" id="street" />
        </div>
        <div>
          <label htmlFor="number">Número</label>
          <Input type="text" name="number" id="number" />
        </div>
        <div>
          <label htmlFor="complement">Complemento</label>
          <Input type="text" name="complement" id="complement" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="city">Cidade</label>
          <Input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <Input type="text" name="state" id="state" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <Input type="text" name="cep" id="cep" />
        </div>
      </div>
    </FormBox>
  );
}

export default FormPartial;
