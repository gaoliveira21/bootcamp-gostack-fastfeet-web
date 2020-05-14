import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin: 30px 0;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    div {
      position: relative;

      input {
        padding: 9px;
        border: 1px solid #dddddd;
        border-radius: 4px;
        width: 237px;
        margin-left: 10px;

        &::placeholder {
          color: #999;
          margin-left: 10px;
        }
      }

      svg {
        display: flex;
        align-self: center;
        height: 100%;
        padding-left: 3px;
        font-size: 16px;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        position: absolute;
        background: #fff;
      }
    }

    button {
      display: flex;
      align-items: center;
      border: 0;
      background: #7d40e7;
      padding: 0 9px;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;

      svg {
        margin-right: 4px;
        color: #fff;
      }
    }
  }
`;
