import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 450px;
    border-radius: 4px;
    padding: 20px;
    height: 200px;
    background: #fff;
    z-index: 200;
    box-shadow: 0 0 10px #00000033;
    left: calc(50% - 225px);
    transition: transform 0.4s;
    transform: translateY(calc(50%));

    svg {
      cursor: pointer;
      top: 5px;
      right: 10px;
      position: absolute;
    }

    strong {
      color: #444444;
      font-size: 14px;
      margin-bottom: 2px;
    }

    span {
      padding: 2px 0;
      color: #555;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #eee;
      margin: 4px 0;
      padding: 0;
    }

    p {
      padding: 2px 0;
      color: #666666;

      strong {
        color: #444444;
      }
    }

    img {
      display: flex;
      align-self: center;
      width: 234px;
      height: 36px;
    }
  }
`;

export const Close = styled.div`
  width: 100%;
  height: 100%;
  z-index: 151;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
