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

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
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

        setNome(data.name);
        setLastname(data.lastname);
        setEmail(data.email);
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);

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

    if (name.length < 3 || name.length > 255) {
      toast.error('Nome precisa esta entar entre 3 a 255 caracteres');
      formErrors = true;
    }

    if (lastname.length < 3 || lastname.length > 255) {
      toast.error('O sobrenome precisa estar entre 3 a 255 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail esta invalido');
      formErrors = true;
    }

    if (!isInt(String(age))) {
      toast.error('idade esta inalida');
      formErrors = true;
    }

    if (!isFloat(String(age))) {
      toast.error('O peso esta invalido');
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error('Altura esta invalido');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/alunos/${id}`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Usuario Editado com sucesso');
      } else {
        const { data } = await axios.post('/alunos/', {
          name,
          lastname,
          email,
          age,
          weight,
          height,
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
            {foto ? <img src={foto} alt={name} /> : <FaUserCircle size={180} />}
            <Link to={`/fotos/${id}`}>
              <FaEdit size={24} />
            </Link>
          </Photo>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="text"
            placeholder="lastname..."
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <input
            type="email"
            placeholder="e@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="peso"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            type="text"
            placeholder="altura"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
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
