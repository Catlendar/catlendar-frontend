import { styled } from 'styled-components';

export const ToastWrapper = styled.div`
  width: 264px;
  background-color: #000c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-radius: 50px;

  p {
    font-size: var(--small-font-size);
    color: var(--color-white);
  }
`;
