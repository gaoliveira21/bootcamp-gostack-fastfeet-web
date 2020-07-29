import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100% !important;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .paginate-continer {
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: center;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin: 0 5px;
}

.page-link {
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #555;
  cursor: pointer;
}

.page-active {
  border-radius: 50%;
  background-color: #7d40e7;
}

.page-link-active {
  color: #fff;
}

.control-button {
  border: 0;
  margin: 0 10px;
  background-color: #7d40e7;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: all .2s ease-in-out;
}

.control-button:hover {
  opacity: 0.8;
}

.page-link:hover {
  color: #ccc;
}


`;
