import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import { Center } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');
  const history = get(props, 'history');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = false;

    if (!isEmail(email)) {
      formError = true;
      toast.error('E-mail invalido');
    }

    if (password.length < 6 || password.length > 50) {
      formError = true;
      toast.error('Password invalido');
    }

    if (formError) return;

    dispatch(actions.loginRequest({ password, email, prevPath, history }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Center>
        <div>
          <p>Login</p>
        </div>
        <div className="circule" />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="fulano@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </Center>
    </Container>
  );
}
