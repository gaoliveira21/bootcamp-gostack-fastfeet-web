import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  div {
    position: relative;
    width: 450px;
    border-radius: 4px;
    padding: 20px;
    height: 200px;
    background: #fff;
    z-index: 102;
    box-shadow: 0 0 10px #00000033;

    svg {
      cursor: pointer;
      top: 5px;
      right: 10px;
      position: absolute;
    }
  }
`;
