import { styled } from 'styled-components';

export const TodoModalDeleteButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover svg {
    transform: scale(1.3);
    transition: transform 0.4s ease;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
