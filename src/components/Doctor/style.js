import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .4);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  form {
    background: #FFFFFF;
    border: 1px solid #00395E;
    border-radius: 10px;
    width: 714px;
    height: 514px;
    padding: 30px;
    z-index: 20;
  }
`;