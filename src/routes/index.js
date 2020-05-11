import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sign from '~/pages/Sign';
import Orders from '~/pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/orders" component={Orders} />
    </Switch>
  );
}
