import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  position: relative;
  margin-top: 0.6rem;
  color: var(--text-color-warning);
  font-size: 1.3rem;
  opacity: message ? 1 : 0;
  transition: 'opacity 0.3s';
`;
