import styled from 'styled-components';

export const Input = styled.input`
  width: 340px;
  border: none;
  border-bottom: 1px solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-size: var(--large-font-size);

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--bg-color-main);
  }
`;

export const InputName = styled.p`
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-bottom: 9px;
`;
