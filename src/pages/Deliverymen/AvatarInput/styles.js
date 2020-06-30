import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    cursor: pointer;

    span {
      color: #dddddd;
    }

    img {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      border: 2px dashed #555;
      background-color: #eee;
    }

    input[type='file'] {
      display: none;
    }
  }
`;
