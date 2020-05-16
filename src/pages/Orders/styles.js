import styled from 'styled-components';

export const OrdersTable = styled.table`
  margin-top: 30px;
  width: 100%;
  border-spacing: 0 15px;

  thead th {
    background: none;
    font-weight: bold;
    color: #444;
    padding: 12px;
    text-align: left;
    margin: 0;

    &:last-child {
      text-align: center;
    }
  }

  tbody td {
    padding: 12px;
    background: #fff;
    margin: 10px;
    border-radius: 4px;
    color: #555;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #ccc;
      }

      span {
        padding-left: 10px;
      }
    }
  }
`;

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
