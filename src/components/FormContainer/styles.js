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
