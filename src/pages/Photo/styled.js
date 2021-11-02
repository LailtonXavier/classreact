import styled from 'styled-components';

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #eee;
    border: 5px dashed #eee
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    border: 5px dotted black;
    overflow: hidden;
  }
  img {
    width: 180px;
    height: 180px;
  }

  input {
    display: none;
  }
`;
