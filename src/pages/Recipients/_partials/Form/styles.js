import styled from 'styled-components';

export const FormBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 0.6fr 0.4fr;
    grid-column-gap: 10px;
  }

  > div:nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    color: #444444;
    margin-bottom: 4px;
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
`;
