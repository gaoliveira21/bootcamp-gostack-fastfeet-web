import styled from 'styled-components';

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  background: #dff0df;
  width: 110px;
  padding: 8px;
  border-radius: 12px;

  div {
    width: 10px;
    height: 10px;
    padding: 5px;
    border-radius: 50%;
    background: #2ca42b;
  }

  span {
    text-align: center;
    padding: 0;
    margin: 0;
    font-weight: bold;
    color: #2ca42b;
  }
`;
