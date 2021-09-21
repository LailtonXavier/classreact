import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CenterUsers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  margin: auto;
  position: relative;

  .cardContainer {
    position: relative;
    margin: 5px;
    padding: 5px;
    color: black;
    background: white;
    height: 22rem;
    transition: 0.3s ease-in-out;
    cursor: grab;
  }
  .cardContainer:hover {
    z-index: 1;
    transform: scale(1.1);
    box-shadow: 2px 2px 20px 1px #ccc;
  }

  img {
    margin: 1rem;
    max-width: 100%;
    width: 15rem;
    height: 15rem;
    object-fit: fill;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }

  .text {
    position: relative;
    top: -10px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    padding: 5px;
  }

  .text span {
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;

    color: #000;
  }

  .icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
  }

  .cardContainer .text {
    position: relative;
    margin-top: 140px;
    padding: 10px 15px;
    text-align: center;
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .cardContainer:hover .text {
    visibility: visible;
    opacity: 1;
    margin-top: -10px;
    transition-delay: 0.1s;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background: white;
  color: black;
  padding: 1.5rem;
  margin: 1rem;
  font-size: 1.3rem;
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 1rem;
  border-radius: 1.2rem;
  background: white;
  color: black;
  font-weight: bold;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
