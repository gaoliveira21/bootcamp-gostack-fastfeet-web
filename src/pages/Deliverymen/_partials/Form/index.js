import React from 'react';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import AvatarInput from '../../AvatarInput';

import { FormBox, InputBox } from './styles';

function FormPartial({ avatarId }) {
  return (
    <FormBox>
      <AvatarInput avatarId={avatarId} name="avatar_id" />
      <InputBox>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Insira o nome do entregador"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Insira o e-mail do entregador"
        />
      </InputBox>
    </FormBox>
  );
}

FormPartial.propTypes = {
  avatarId: PropTypes.func.isRequired,
};

export default FormPartial;
