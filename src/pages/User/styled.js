import styled from 'styled-components';

export const CenterUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    margin: 0.5rem;
  }

  .efects {
    position: absolute;
    /* left: -57%;  mobile*/
    left: 70%;
    top: 50%;

    width: 300px;
    height: 300px;
    border-radius: 50%;

    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff;

    animation-name: efect;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes efect {
    0% {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff, inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f,
        10px 0 80px #0ff;
    }

    ,
    25% {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f;
    }

    ,
    50% {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff, inset 20px 0 300px #f0f;
    }

    ,
    75% {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff, inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f,
        10px 0 80px #0ff;
    }
  }
`;

export const Title = styled.h3`
  background: white;
  color: black;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  margin-top: 20px;

  position: relative;

  img {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05) inset,
      0px 0px 8px rgba(82, 168, 236, 0.6);
  }

  a {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    bottom: 0;
    color: white;
    background: black;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: 0.4s;
  }

  a:hover {
    transform: scale(1.2);
  }
`;
