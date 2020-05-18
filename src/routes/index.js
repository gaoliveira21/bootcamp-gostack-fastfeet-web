import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/Sign';
import Orders from '~/pages/Orders';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/Recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
