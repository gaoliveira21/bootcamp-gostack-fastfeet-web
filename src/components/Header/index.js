import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <li>
              <NavLink activeStyle={{ color: '#444444' }} to="/orders">
                ENCOMENDAS
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#444444' }} to="/deliverymen">
                ENTREGADORES
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#444444' }} to="/recipients">
                DESTINATÁRIOS
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#444444' }} to="/problems">
                PROBLEMAS
              </NavLink>
            </li>
          </ul>
        </nav>

        <aside>
          <strong>Admin FastFeet</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
