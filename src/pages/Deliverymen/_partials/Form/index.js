import React from 'react';
import { MdImage } from 'react-icons/md';

import { FormBox, AvatarBox, InputBox } from './styles';

function FormPartial() {
  return (
    <FormBox>
      <AvatarBox>
        <label htmlFor="avatar">
          <MdImage size={74} color="#DDDDDD" />
          <span>Adicionar foto</span>
          <input type="file" name="" id="avatar" accept="image/*" />
        </label>
      </AvatarBox>
      <InputBox>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insira o nome do entregador"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insira o e-mail do entregador"
        />
      </InputBox>
    </FormBox>
  );
}

export default FormPartial;
