import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@font-face {
  font-family: 'CircularStd';
  src: url('/CircularStdBold.woff') format('woff');
  /* font-weight: 300; */
  /* font-style: normal; */
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font: 250 1.5rem "CircularStd";
  }

  button {
    cursor: pointer;

    background: linear-gradient(90deg,
    hsla(265, 53%, 29%, 1) 0%,
    hsla(24, 93%, 73%, 1) 100%);
    color: white;
    font-weight: 500;
    border-radius: 20px;

  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }


   input {

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 10px 1px 10px 1px;
    border: 1px solid #dddddd;
  }
  input:focus {
    padding: 3px 0px 3px 3px;
    margin: 10px 1px 10px 1px;
    box-shadow: 2px 2px 10px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }

  html {

background: -webkit-linear-gradient(45deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%);

  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }

  html {
     // Scroll
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  // color scroll
  ::-webkit-scrollbar-thumb {
    background: ${colors.whites};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }

  }

`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 1rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  /* background: hsla(221, 45%, 73%, 1); */

  /* background: linear-gradient(
    90deg,
    hsla(332, 53%, 82%, 1) 0%,
    hsla(176, 57%, 89%, 1) 100%
  ); */
`;
