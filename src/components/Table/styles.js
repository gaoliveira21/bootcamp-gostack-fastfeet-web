import styled from 'styled-components';

export const TableWrapper = styled.table`
  margin-top: 30px;
  padding-bottom: 20px;
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
    height: 57px;
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

export const ActionBox = styled.div``;
