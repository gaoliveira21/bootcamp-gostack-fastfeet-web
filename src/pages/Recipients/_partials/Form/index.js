import React, { useState } from 'react';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import cepMask from '~/utils/cepMask';

import { FormBox } from './styles';

function FormPartial({ data }) {
  const [formattedCEP, setFormattedCEP] = useState(data.cep);

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
          <Input
            type="text"
            name="cep"
            id="cep"
            maxLength={9}
            defaultValue={formattedCEP}
            value={formattedCEP}
            onChange={(event) => setFormattedCEP(cepMask(event.target.value))}
          />
        </div>
      </div>
    </FormBox>
  );
}

FormPartial.propTypes = {
  data: PropTypes.shape({
    cep: PropTypes.string,
  }),
};

FormPartial.defaultProps = {
  data: {
    cep: '',
  },
};

export default FormPartial;
