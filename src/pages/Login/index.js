import React, { useRef, useEffect } from 'react';
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

  const passRef = useRef('');
  const emailRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = passRef.current.value;
    const email = emailRef.current.value;

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

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Center>
        <div>
          <p>Login</p>
        </div>
        <div className="circule" />

        <form onSubmit={handleSubmit}>
          <input ref={emailRef} type="email" placeholder="fulano@gmail.com" />

          <input ref={passRef} placeholder="password..." type="password" />

          <button type="submit">Entrar</button>
        </form>
      </Center>
    </Container>
  );
}
