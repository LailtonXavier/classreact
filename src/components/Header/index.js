import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaAngellist, FaPowerOff } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { Nav, Log } from './styled';

export default function Header() {
  const dispacth = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispacth(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Log>
        <FaAngellist size={50} />
      </Log>

      <div>
        <Link to="/">Home</Link>

        <Link to="/register">Register</Link>

        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/logout">
            <FaPowerOff sie={24} />
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </Nav>
  );
}
