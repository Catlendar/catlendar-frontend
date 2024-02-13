import styled, { css } from 'styled-components';

interface InputProps {
  form?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 340px;
  border: none;
  border-bottom: 1px solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-size: var(--large-font-size);

  ${({ form }) =>
    !form &&
    css`
      width: 80%;
      font-size: var(--small-font-size);
      margin: 15px 0;
    `}

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
