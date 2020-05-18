import styled from 'styled-components';

export const StatusBadge = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  width: 110px;
  padding: 8px;
  border-radius: 12px;

  div {
    width: 10px;
    height: 10px;
    padding: 5px;
    border-radius: 50%;
    background: ${(props) => props.fontColor};
  }

  span {
    text-align: center;
    padding: 0;
    margin: 0;
    font-weight: bold;
    color: ${(props) => props.fontColor};
    font-size: 12px;
  }
`;
