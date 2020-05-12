import React from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

function Sign() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest('ga@mail.com', '123456'));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">SEU E-MAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@email.com"
        />
        <label htmlFor="password">SUA SENHA</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="***********"
        />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}

export default Sign;
