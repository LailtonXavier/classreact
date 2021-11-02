import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { All } from './styled';

const AllUsers = () => {
  const [usersDatas, setUsersDatas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/users');
      setUsersDatas(data);
    };

    getData();
  }, []);
  return (
    <All>
      <div className="about">
        <p>Usuarios no programa</p>
      </div>

      <div>
        <div className="circle">
          {usersDatas.map((dados) => (
            <div key={String(dados.id)} className="allUsers">
              {dados.name}
            </div>
          ))}
        </div>

        <div className="squares" />
        <div className="squares2" />
      </div>
    </All>
  );
};

export default AllUsers;
