import { all, takeLatest } from 'redux-saga/effects';

function* signIn({ payload }) {
  const { email, password } = payload;
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
