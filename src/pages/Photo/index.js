import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Photo({ match, history }) {
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));

        setIsLoading(false);
      } catch {
        toast.error('Erro ao obter a imagem');
        setIsLoading(false);
        history.push('/');
      }
    }

    getData();
  }, [foto, history, id]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso!');

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : 'Selecionar'}
          <input type="file" name="foto" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
Photo.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
