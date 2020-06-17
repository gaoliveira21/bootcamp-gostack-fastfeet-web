import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  svg {
    cursor: pointer;
  }

  ul {
    opacity: ${(props) => (props.visible === 'true' ? 1 : 0)};
    text-align: left;
    position: absolute;
    width: 150px;
    top: calc(100% + 10px);
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 2px #00000026;
    padding: 0 8px;
    transition: opacity 0.4s;
    display: ${(props) => (props.visible === 'true' ? 'block' : 'none')};

    li {
      display: flex;
      align-items: center;
      padding: 8px 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;

      span {
        color: #999999;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: calc(50% - 5px);
      top: -5px;
      width: 0;
      height: 0;
      background: #fff;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #0000001a;
    }
  }
`;
