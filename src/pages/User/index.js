import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/GlobalStyles';
import { Center } from '../Login/styled';
import { Title, Photo } from './styled';

export default function User({ match, history }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      if (!id) return;

      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.statue', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [history, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa esta entar entre 3 a 255 caracteres');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('O sobrenome precisa estar entre 3 a 255 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail esta invalido');
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('idade esta inalida');
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('O peso esta invalido');
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura esta invalido');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Usuario Editado com sucesso');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Usuario criado com suceso');
        history.push(`/aluno/${data.id}/edit`);
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Center>
        <Title>{id ? 'Editando aluno' : 'Novo aluno'}</Title>

        {id && (
          <Photo>
            {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
            <Link to={`/fotos/${id}`}>
              <FaEdit size={24} />
            </Link>
          </Photo>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="text"
            placeholder="sobrenome..."
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />

          <input
            type="email"
            placeholder="e@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            placeholder="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />

          <input
            type="text"
            placeholder="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <input
            type="text"
            placeholder="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </form>
        <div className="efects" />
      </Center>
    </Container>
  );
}

User.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
