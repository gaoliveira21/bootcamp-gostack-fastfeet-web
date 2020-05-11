import React from 'react';

import logo from '~/assets/fastfeet-logo.png';

function Sign() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
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
