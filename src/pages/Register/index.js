import React, { useState, useEffect } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import { CenterRegister } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Register(props) {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { history } = props;

  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    setName(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome is invalid');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErros = true;
      toast.error('Senha is invalid');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail is invalid');
    }

    if (formErros) return;

    dispatch(actions.registerRequest({ nome, password, email, id, history }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <CenterRegister>
        <h1>{id ? 'Editar conta' : 'Criar conta'}</h1>
        <div className="circule" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Fulanos..."
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Fulano@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="pass...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
        </form>
      </CenterRegister>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
