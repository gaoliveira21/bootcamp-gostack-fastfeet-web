import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 64px;

    img {
      width: 135px;
      height: auto;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    ul {
      display: flex;
      flex-direction: row;

      li {
        margin-right: 20px;

        a {
          font-weight: bold;
          color: #999999;

          &:hover {
            color: ${darken(0.2, '#999')};
          }
        }
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      color: #555;
      font-weight: bold;
    }

    button {
      color: #de3b3b;
      background: none;
      border: 0;

      &:hover {
        color: ${lighten(0.15, '#DE3B3B')};
      }
    }
  }
`;
