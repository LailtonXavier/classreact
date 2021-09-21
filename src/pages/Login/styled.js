import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 10px rgba(250, 250, 250, 0.8);
  width: 450px;
  height: 500px;
  position: relative;
  overflow: hidden;


  }
  .circule {
    position: absolute;
    top: -110px;
    left: 0px;
    border-radius: 20px 0 0 0;
    background: #c6f8ff;
    opacity: 0.4;
    width: 210px;
    height: 270px;
    transform: rotate(20deg);
  }


  p {
    display: inline-block;
    word-break: break-all;
    /* margin: 10px 0 50px; */
    border-bottom: 2px dotted rgba(250, 250, 250, 0.8);
    font-size: 2rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    width: 100%;

  }

  input {
    color:#000;
    font-size: 2rem;
    /* margin: 0.5rem 0; */
    border-radius: 4px;
  }

   button {
     display: flex;
     justify-content: center;
     align-items: center;
    margin-top: 10px;
    padding: 0.2rem;
    font-size: 2rem;

  }
`;
