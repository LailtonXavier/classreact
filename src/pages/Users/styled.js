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
    border-radius: 10px;
  }
  .cardContainer:hover {
    z-index: 1;
    transform: scale(1.1);
    box-shadow: 2px 2px 20px 1px #ccc;
  }

  .imgBx {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img,
  .imgBx {
    margin: 1rem;
    max-width: 100%;
    width: 15rem;
    height: 15rem;
    object-fit: fill;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
  }

  .text {
    position: relative;
    top: -10px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2);
  }
  a {
    color: black;
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
  border: 1px solid white;
  color: white;
  font-weight: bold;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const All = styled.div`
  border-radius: 20px;
  border: 1px solid white;
  padding: 1rem;
  position: relative;

  width: 30rem;
  height: 450px;
  overflow: hidden;
  overflow-y: scroll;
  color: white;
  margin: 1rem;

  p {
    border-bottom: 1px solid rgba(81, 203, 238, 1);
  }

  .circle {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    right: 0;
    text-align: center;
    width: 400px;
    height: 350;
    border-radius: 50%;

    overflow: hidden;
    padding: 0.5rem;
    background: -webkit-linear-gradient(
      180deg,
      hsla(24, 93%, 73%, 0.2) 0%,
      hsla(265, 53%, 29%, 0.5) 110%
    );
  }

  .allUsers {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    padding: 10px 15px;
    border-radius: 20px;
    margin: 10px;
    width: 150px;

    background: rgba(151, 150, 150, 0.5);
    box-shadow: 2px 2px 10px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
  .squares,
  .squares2 {
    position: absolute;
    border-radius: 20px 20px 0px 0;
    opacity: 0.4;
    width: 310px;
    height: 350px;
    transform: rotate(20deg);
    z-index: -1;
    background: -webkit-linear-gradient(
      45deg,
      hsla(265, 53%, 29%, 1) 0%,
      hsla(24, 93%, 73%, 1) 100%
    );
  }

  .squares {
    top: 105px;
    left: 0px;
    bottom: 0;
  }
  .squares2 {
    top: 80px;
    right: 200px;
  }
`;
