import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Voce efetuou login com sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    payload.history.push(payload.prevPath);
  } catch {
    toast.error('Senha ou enail invalido');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, name, email, password, history } = payload;

  try {
    if (id) {
      // EDIT
      yield call(axios.put, '/users', {
        email,
        name,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      // REGISTER
      yield call(axios.post, '/users', {
        email,
        name,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
