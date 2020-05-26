import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 900px;
  margin: 0 auto;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;

    h2 {
      color: #444444;
      font-size: 24px;
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: row;

      a {
        display: flex;
        align-items: center;
        background: #cccccc;
        padding: 10px;
        border-radius: 4px;
        margin-right: 10px;

        span {
          color: #fff;
          font-weight: bold;
          font-size: 14px;
        }
      }

      button {
        display: flex;
        align-items: center;
        border: 0;
        background: #7d40e7;
        padding: 10px;
        border-radius: 4px;

        span {
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          margin-left: 4px;
        }
      }
    }
  }
`;

export const FormBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;

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
    }

    label {
      font-weight: bold;
      color: #444444;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #dddddd;
      padding: 13px;
      background: #fff;
      border-radius: 4px;
    }
  }
`;
