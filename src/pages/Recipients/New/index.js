import React from 'react';
import { Form } from '@rocketseat/unform';

import FormHeader from '~/components/FormHeader';
import FormPartial from '../_partials/Form';

import { Container } from './styles';

function New() {
  return (
    <Container>
      <Form>
        <FormHeader title="Cadastro de destinátarios" />
        <FormPartial />
      </Form>
    </Container>
  );
}

export default New;
