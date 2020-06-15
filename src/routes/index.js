import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/Sign';
import Orders from '~/pages/Orders';
import NewOrder from '~/pages/Orders/New';
import EditOrder from '~/pages/Orders/Edit';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/new" component={NewOrder} isPrivate />
      <Route path="/orders/edit" component={EditOrder} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
