import styled from 'styled-components';

export const FormBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 0;

  label {
    color: #444444;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #dddddd;
    width: 100%;
    padding: 13px;
    background: #fff;
    border-radius: 4px;
    margin-top: 5px;
    color: #999999;
  }

  span {
    color: #de3b3b;
    margin-top: 4px;
    font-weight: bold;
  }
`;
