import styled from 'styled-components';

export const CheckboxStyle = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid var(--checkbox-color);
  background-color: var(--color-white);
  border-radius: 50%;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-color: var(--button-color-enable);
  }
`;
