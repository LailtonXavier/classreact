import React, { useEffect, useState } from 'react';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { CenterUsers, Content, NovoAluno } from './styled';
import AllUsers from './AllUsers';

export default function Users() {
  const [student, setStudents] = useState(['']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { data } = await axios.get('/alunos');
      setStudents(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);

      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...student];
      novosAlunos.splice(index, 1);
      setStudents(novosAlunos);

      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />

        <AllUsers />

        <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
        <CenterUsers>
          {student.map((students, index) => (
            <div className="cardContainer" key={String(students.id)}>
              <div className="imgBx">
                {get(students, 'Fotos[0].url', false) ? (
                  <img src={students.Fotos[0].url} alt="photos" />
                ) : (
                  <FaUserCircle size={150} />
                )}
              </div>

              <div className="text">
                <span>{students.name}</span>
                <span>{students.email}</span>

                <div className="icons">
                  <Link to={`/aluno/${students.id}/edit`}>
                    <FaEdit size={24} />
                  </Link>

                  <Link
                    onClick={handleDeleteAsk}
                    to={`/aluno/${students.id}/delete`}
                  >
                    <FaWindowClose size={24} />
                  </Link>

                  <FaExclamationTriangle
                    size={16}
                    display="none"
                    cursor="pointer"
                    color="red"
                    onClick={(e) => handleDelete(e, students.id, index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </CenterUsers>
        <Content>
          <p>Desenvolvido usando ReactJs + Redux </p>
        </Content>
      </Container>
    </>
  );
}
