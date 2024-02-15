import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding-top: 6px;
  color: var(--text-color-warning);
  font-size: var(--small-font-size);
  opacity: message ? 1 : 0;
  transition: 'opacity 0.3s';
`;
