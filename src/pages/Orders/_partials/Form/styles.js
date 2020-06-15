import styled from 'styled-components';

export const FormBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      width: 400px;
      padding-bottom: 25px;
    }
  }

  select {
    border: 1px solid #dddddd;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    color: #999999;
  }

  label {
    font-weight: bold;
    color: #444444;
    font-size: 14px;
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
