import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container } from './styles';

import FormHeader from '~/components/FormHeader';
import FormPartial from '~/pages/Deliverymen/_partials/Form';

function Edit({ location }) {
  const data = location.state;

  return (
    <Container>
      <Form initialData={data}>
        <FormHeader title="Edição de entregadores" />
        <FormPartial />
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Edit;
