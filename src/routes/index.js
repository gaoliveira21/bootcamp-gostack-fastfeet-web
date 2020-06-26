import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/Sign';
import Orders from '~/pages/Orders';
import NewOrder from '~/pages/Orders/New';
import EditOrder from '~/pages/Orders/Edit';
import Deliverymen from '~/pages/Deliverymen';
import NewDeliverymen from '~/pages/Deliverymen/New';
import Recipients from '~/pages/Recipients';
import NewRecipient from '~/pages/Recipients/New';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/new" component={NewOrder} isPrivate />
      <Route path="/orders/edit" component={EditOrder} isPrivate />
      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route path="/deliverymen/new" component={NewDeliverymen} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" component={NewRecipient} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
