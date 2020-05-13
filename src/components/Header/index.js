import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

function Header() {
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
          <Link to="/">sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
