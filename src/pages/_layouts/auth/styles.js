import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #7d40e7;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;
  padding: 20px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 30px 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      margin: 12px 0 10px;
      font-weight: bold;
      color: #444;
    }

    input {
      border: 1px solid #ddd;
      padding: 12px 10px;
      border-radius: 4px;
    }

    span {
      color: #de3b3b;
      margin-top: 4px;
      font-weight: bold;
    }

    button {
      margin-top: 20px;
      width: 100%;
      padding: 12px 10px;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;
      text-align: center;
      border: 0;
      border-radius: 4px;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
