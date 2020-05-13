import React from 'react';

import api from '~/services/api';

// import { Container } from './styles';

function Orders() {
  api.get('/orders');

  return <h1>Orders</h1>;
}

export default Orders;
